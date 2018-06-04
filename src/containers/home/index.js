import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import TitlePanel from '../../reusable/TitlePanel';
import RaisedButton from 'material-ui/RaisedButton';
import styled from 'styled-components';
import Icon from '../../reusable/Icon';

const MobileWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${ props => props.fromWrapper ? 'center' : 'space-around'};
  align-items: center;
  margin-top: ${props => props.fromWrapper ? '100px' : '30px'};
  width: 100%;
  height: 100%;
`;
const MobileButtonNav = styled.div`
  margin: 5px;
  width: 45%;
  height: 250px;
  background-color: ${props => (props.color ? props.color : null)};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  color: #383838;
  border-radius: 5px;
`;

const AuthGreeting = styled.div`
  background: #383838;
  color: #f8f8f8;
  padding: 10px;
  text-align: center;
  font-family: 'Roboto', sans-serif;
`;

const MNavButton = ({ name, color, title, uri }) => (
  <MobileButtonNav color={color}>
    <Link style={{ textDecoration: 'none', color: '#383838' }} to={uri}>
      <Icon color="#383838" icon={name} />
      <p>{title || name}</p>
    </Link>
  </MobileButtonNav>
);

const navOptions = [
  {
    name: 'face',
    title: 'Dashboard',
    color: '#FFB74D',
    key: '001',
    uri: '/dashboard',
  },
  {
    name: 'local_hospital',
    title: 'Insurance',
    color: '#FF8A65',
    key: '002',
    uri: '/insurance-selector',
  },
  {
    name: 'brightness_medium',
    title: 'settings',
    color: '#81C784',
    key: '003',
    uri: '/insurance-selector',
  },
  {
    name: 'find_in_page',
    title: 'Doctor',
    color: '#FFEB3B',
    key: '004',
    uri: '/insurance-selector',
  },
];
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Stay Healthy',
    };
  }
  componentDidMount() {
    // this.setListener();
  }
  printSavedName() {
    return null;
  }

  render() {
    const { app } = this.props;

    // ? if from mobile:
    // ! remove flip for prod, value is flipped for testing
    if (!app.fromWrapper) {
      return (
        <div>
          {
            app.username && (
              <AuthGreeting>
                <p>Welcome, {app.username}</p>
              </AuthGreeting>
            )
          }
          <MobileWrapper fromWrapper={app.fromWrapper}>
            {navOptions.map(opt => (
              <MNavButton
                key={opt.key}
                name={opt.name}
                color={opt.color}
                title={opt.title}
                uri={opt.uri}
              />
            ))}
          </MobileWrapper>
        </div>
      );
    }
    return (
      <div style={{ marginTop: app.fromWrapper ? '70px' : '0px' }}>
        <TitlePanel
          title={this.state.title}
          subtitle="Amazing Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut. 804-423-2342"
        />
        <RaisedButton label="Clear Saved Name" onClick={this.setListener} />
      </div>
    );
  }
}

const mapState = state => ({
  app: state.app,
});

export default connect(mapState)(Home);
