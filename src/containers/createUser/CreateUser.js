import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser } from '../../redux/actions/app';
import uuid from 'uuid';
import TitlePanel from '../../reusable/TitlePanel';
import Form from '../../components/Form';
import Button from '../../reusable/Button';
import Panel from '../../reusable/Panel';

const fields = [
  { name: 'email', type: 'text', required: true, id: uuid() },
  { name: 'firstName', type: 'text', required: true, id: uuid() },
  { name: 'lastName', type: 'text', required: true, id: uuid() },
  { name: 'city', type: 'text', required: true, id: uuid() },
  { name: 'state', type: 'text', required: true, id: uuid() },
  { name: 'country', type: 'text', required: true, id: uuid() },
  { name: 'zip', type: 'text', required: true, id: uuid() },
  { name: 'phone', type: 'text', required: true, id: uuid() },
  { name: 'dob', type: 'text', required: true, id: uuid() },
];

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      city: '',
      state: '',
      country: '',
      zip: '',
      phone: '',
      dob: '',
    };
  }
  handleOnChange = e => {
    const {
      target: { name, value },
    } = e;
    this.setState(() => ({ [name]: value }));
  };
  handleSubmit = () => {
    if (!this.state.email) {
      return null;
    }
    this.props.actions.createUser(this.state);
  };
  render() {
    return (
      <div>
        <TitlePanel
          title="Create A User"
          subtitle="Please complete the following form"
        />
        <Form
          stateValues={this.state}
          fields={fields}
          onSubmit={stuff => console.log(stuff)}
          handleOnChange={this.handleOnChange}
        />
        <Panel right="true">
          <Button label="Create User" onPress={this.handleSubmit} />
        </Panel>
      </div>
    );
  }
}

const mapDispatch = dispatch => ({
  actions: {
    createUser: bindActionCreators(createUser, dispatch),
  },
});

export default connect(null, mapDispatch)(CreateUser);
