import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitlePanel from '../../reusable/TitlePanel';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import styled from 'styled-components';
import COLORS from '../../utils/constants';

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
  render() {
    const {
      store: {
        app: {
          username = 'test',
          email = 'test@test.com',
          firstName = 'test',
          lastName = 'test',
        },
      },
    } = this.props;
    return (
      <div>
        <TitlePanel title="Dashboard" subtitle={`Welcome, ${firstName}`} />
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
              <ListText>Email: {email}</ListText>
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
