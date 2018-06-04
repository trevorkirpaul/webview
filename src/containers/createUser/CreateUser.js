import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { createUser, handleConfirmUser } from '../../redux/actions/app';
import uuid from 'uuid';
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import TitlePanel from '../../reusable/TitlePanel';
import Form from '../../components/Form';
import Button from '../../reusable/Button';
import Panel from '../../reusable/Panel';

const fields = [
  { name: 'email', type: 'email', required: true, id: uuid() },
  { name: 'firstName', type: 'text', required: true, id: uuid() },
  { name: 'lastName', type: 'text', required: true, id: uuid() },
  { name: 'city', type: 'text', required: true, id: uuid() },
  { name: 'state', type: 'text', required: true, id: uuid() },
  { name: 'country', type: 'text', required: true, id: uuid() },
  { name: 'zip', type: 'text', required: true, id: uuid() },
  { name: 'phone', type: 'text', required: true, id: uuid() },
  { name: 'dob', type: 'text', required: true, id: uuid() },
  { name: 'password', type: 'password', required: true, id: uuid() },
];

class CreateUser extends Component {
  static getDerivedStateFromProps(props, state) {
    const {
      store: { app },
      history
    } = props
    if (app.confirm) { history.push("/") }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      email: 'test',
      // firstName: 'test',
      // lastName: 'test',
      // city: 'test',
      // state: 'test',
      // country: 'test',
      // zip: 1234,
      // phone: 1234,
      // dob: 1234,
      password: 'test',
      open: false,
      confirmCode: ''
    };
  }
  handleOnChange = e => {
    const {
      target: { name, value },
    } = e;
    this.setState(() => ({ [name]: value }));
  };
  handleSubmit = () => {
    const { email, password } = this.state
    if (!this.state.email) {
      return null;
    }
    this.props.actions.createUser({email, password});
    this.setState(() => ({ open: true }))
  };
  openModal = () => this.setState(() => ({ open: true }))
  handleConfirm = code => {
    const { confirmCode, email } = this.state
    const { actions } = this.props
    if (!confirmCode) { return null }
    actions.handleConfirmUser({ Username: email, confirmCode })

  }
  handleToggleModal = () => this.setState(() => ({ open: !this.state.open }))
  render() {
    const actions = [
      <RaisedButton
        label="cancel"
        onClick={this.handleToggleModal}
      />,
      <RaisedButton
        label="Confirm"
        primary={true}
        onClick={this.handleConfirm}
      />
    ]
    const { app } = this.props.store;
    const { open } = this.state
    return (
      <div style={{ marginTop: app.fromWrapper ? '70px' : '0px' }}>
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
          <RaisedButton label="Confirm User" onClick={this.openModal} />
        </Panel>
        <Dialog
          title="Confirm Registration"
          actions={actions}
          open={open}
        >
        <TextField
          onChange={this.handleOnChange}
          value={this.state.confirmCode}
          name="confirmCode"
        />
        </Dialog>
      </div>
    );
  }
}
const mapState = state => ({
  store: {
    app: state.app,
  },
});

const mapDispatch = dispatch => ({
  actions: {
    createUser: bindActionCreators(createUser, dispatch),
    handleConfirmUser: bindActionCreators(handleConfirmUser, dispatch)
  },
});

export default connect(mapState, mapDispatch)(CreateUser);
