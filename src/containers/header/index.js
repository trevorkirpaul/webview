import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  resetApp,
  loadInsuranceData,
  loadDoctorData,
} from '../../redux/actions/app';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import COLORS from '../../utils/constants';
import Icon from '../../reusable/Icon';
import { login } from '../../redux/actions/app';

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  font-family: 'Roboto', sans-serif;
  background-color: ${COLORS.lightBlue};
`;

const MobileHeader = styled.div`
  padding-top: 25px;
  background-color: palevioletred;
  color: #383838;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100vw;
`;
const MobileButtonWrap = styled.div`
  width: 75%;
  padding-bottom: 10px;
  padding-right: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;
const MobileTitle = styled.span`
  font-size: 2em;
  font-family: 'Roboto', sans-serif;
  color: #f8f8f8;
`;

const TitleLogo = styled.span`
  text-decoration: none;
  color: ${COLORS.black};
  font-size: 2em;
  font-weight: 900;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  border-bottom: 1px solid ${COLORS.lightBlue};
  margin: 5px 10px;
  &:hover {
    border-color: ${COLORS.black};
  }
`;
const BlankLink = styled(Link)`
  text-decoration: none;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;
const LinkButton = ({ location, text }) => (
  <StyledLink to={location}>
    <span>{text}</span>
  </StyledLink>
);

const AuthTrueButtons = () => (
  <ButtonWrapper>
    <IconMenu
      iconButtonElement={
        <IconButton>
          <MoreVertIcon />
        </IconButton>
      }
      targetOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
      <MenuItem>
        <LinkButton location="/dashboard" text="Dashboard" />
      </MenuItem>
      <MenuItem>
        <LinkButton location="/insurance-package" text="View Package" />
      </MenuItem>
      <MenuItem>
        <LinkButton location="/find-doctors" text="Find Doctor" />
      </MenuItem>
      <MenuItem>
        <LinkButton location="/sign-out" text="Sign Out" />
      </MenuItem>
    </IconMenu>
  </ButtonWrapper>
);

const AuthFalseButtons = () => (
  <ButtonWrapper>
    <LinkButton location="/create-user" text="Create User" />
    <LinkButton location="/sign-in" text="Sign In" />
  </ButtonWrapper>
);

class Header extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      store: { app, insurancePackage },
      actions,
    } = nextProps;
    if (!prevState.packagesLoaded && !insurancePackage.packages && app.auth) {
      actions.loadInsuranceData();
      actions.loadDoctorData();
      return {
        loading: true,
      };
    }
    if (insurancePackage.packages && !prevState.packagesLoaded) {
      return {
        loading: false,
        packagesLoaded: true,
      };
    }

    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      packages: null,
      packagesLoaded: false,
      loading: false,
      title: 'Main',
    };
  }
  componentDidMount() {
    const {
      store: { app },
      actions,
    } = this.props;
    const name = localStorage.getItem('name');
    if (app.auth) {
      actions.loadInsuranceData();
      actions.loadDoctorData();
      this.setState(() => ({ loading: true }));
    }
    if (name) {
      actions.login({ email: name });
    }
  }

  render() {
    const {
      store: { app },
    } = this.props;
    if (app.fromWrapper) {
      return (
        <MobileHeader>
          <MobileButtonWrap>
            <Link to="/">
              <Icon icon="waves" color={COLORS.white} />
            </Link>
            <MobileTitle>Insurance</MobileTitle>
            <Link to="/sign-in">
              <Icon icon="face" color={COLORS.white} />
            </Link>
          </MobileButtonWrap>
        </MobileHeader>
      );
    }
    return (
      <NavWrapper>
        <div>
          <BlankLink to="/">
            <TitleLogo>PoC</TitleLogo>
          </BlankLink>
        </div>
        {app.auth ? <AuthTrueButtons /> : <AuthFalseButtons />}
      </NavWrapper>
    );
  }
}

const mapState = state => ({
  store: {
    app: state.app,
    insurancePackage: state.insurancePackage,
    doctors: state.doctors,
  },
});

const mapDispatch = dispatch => ({
  actions: {
    resetApp: bindActionCreators(resetApp, dispatch),
    loadInsuranceData: bindActionCreators(loadInsuranceData, dispatch),
    loadDoctorData: bindActionCreators(loadDoctorData, dispatch),
    login: bindActionCreators(login, dispatch),
  },
});

export default connect(mapState, mapDispatch)(Header);
