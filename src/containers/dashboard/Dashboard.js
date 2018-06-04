import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {bindActionCreators } from 'react'
// import { getUserAttributes } from '../../redux/actions/app'
import TitlePanel from '../../reusable/TitlePanel';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import COLORS from '../../utils/constants';
import RaisedButton from 'material-ui/RaisedButton'

const Wrapper = styled(Paper)`
  text-align: center;
  padding: 15px;
`

const ListWrapper = styled(Paper)`
  padding: 15px 0;
`;
const List = styled.ul`
  list-style: none;
`;
const ListText = styled.p`
  color: ${COLORS.black};
`;
const ListItem = styled.li``;
class Dashboard extends Component {
  handleNavHome = () => {
    this.props.history.push('/sign-in')
  }
  render() {
    const {
      store: {
        app: {
          // username = 'test',
          email = 'test@test.com',
          firstName = 'test',
          // lastName = 'test',
          username
        },
      },
    } = this.props;
    if (!username) {
      return (
        <Wrapper>
          <p>You muse be signed in to access this page</p>
          <RaisedButton label="Sign In" onClick={this.handleNavHome} />
        </Wrapper>
      )
    }
    return (
      <div>
        <TitlePanel title="Dashboard" subtitle={`Welcome, ${username}`} />
        <ListWrapper>
          <List>
            {/* <ListItem>
              <ListText>First Name: {firstName}</ListText>
            </ListItem>
            <Divider />

            <ListItem>
              <ListText>Last Name: {lastName}</ListText>
            </ListItem>
            <Divider /> */}

            <ListItem>
              <ListText>Email: {username}</ListText>
            </ListItem>
            <Divider />

            {/* <ListItem>
              <ListText>Username: {username}</ListText>
            </ListItem> */}
          </List>
        </ListWrapper>
      </div>
    );
  }
}
const mapState = state => ({
  store: {
    doctors: state.doctors,
    app: state.app,
  },
});
export default connect(mapState)(Dashboard);
