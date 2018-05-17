import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetApp, loadInsuranceData } from '../../redux/actions/app';
import IconButton from 'material-ui/IconButton';
// import FlatButton from 'material-ui/FlatButton';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AppBar from 'material-ui/AppBar';
import COLORS from '../../utils/constants';
import Icon from '../../reusable/Icon';

const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  margin: 5px 10px;
  &:hover {
    color: ${COLORS.purple};
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
`;
const LinkButton = ({ location, text }) => (
  <StyledLink to={location}>
    <span>{text}</span>
  </StyledLink>
);

const AuthTrueButtons = (
  <ButtonWrapper>
    <LinkButton location="/insurance-package" text="View Package" />
    <LinkButton location="/" text="Find Doctor" />
    <LinkButton location="/sign-out" text="Sign Out" />
  </ButtonWrapper>
);

const AuthFalseButtons = (
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
    };
  }
  componentDidMount() {
    const {
      store: { app },
      actions,
    } = this.props;
    if (app.auth) {
      actions.loadInsuranceData();
      this.setState(() => ({ loading: true }));
    }
  }
  render() {
    const {
      store: { app },
    } = this.props;
    return (
      <AppBar
        style={{ backgroundColor: COLORS.lightPurple }}
        titleStyle={{ color: COLORS.black }}
        title="Insurance Plans"
        iconElementLeft={
          <Link to="/">
            <IconButton>
              <Icon icon="public" color={COLORS.black} />
            </IconButton>
          </Link>
        }
        iconElementRight={app.auth ? AuthTrueButtons : AuthFalseButtons}
      />
    );
  }
}

const mapState = state => ({
  store: {
    app: state.app,
    insurancePackage: state.insurancePackage,
  },
});

const mapDispatch = dispatch => ({
  actions: {
    resetApp: bindActionCreators(resetApp, dispatch),
    loadInsuranceData: bindActionCreators(loadInsuranceData, dispatch),
  },
});

export default connect(mapState, mapDispatch)(Header);
