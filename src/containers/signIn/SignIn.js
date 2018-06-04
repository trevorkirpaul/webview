import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uuid from 'uuid';
import { login, resetApp } from '../../redux/actions/app';
import TitlePanel from '../../reusable/TitlePanel';
import Form from '../../components/Form';
import Button from '../../reusable/Button';
import Panel from '../../reusable/Panel';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import CircularProgress from 'material-ui/CircularProgress';

const fields = [
  { name: 'email', type: 'email', required: true, id: uuid() },
  { name: 'password', type: 'password', required: true, id: uuid() },
];

class SignIn extends Component {
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      store: { app },
    } = nextProps;
    const { loading } = prevState;
    if (loading && !app.loading) {
      if (app.auth) {
        return {
          loadingComplete: true,
          auth: true,
        };
      }
      return {
        loadingComplete: true,
        auth: false,
      };
    }
    if (app.fromWrapper) {
      return {
        title: 'From Wrapper',
      };
    }
    return null;
  }
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      loading: false,
      loadingMessage: null,
      loadingComplete: false,
      title: 'Sign In',
      auth: false,
    };
  }
  handleOnChange = e => {
    const {
      target: { name, value },
    } = e;
    this.setState(() => ({ [name]: value }));
  };
  handleSubmit = () => {
    if (!this.state.email || !this.state.password) {
      return alert('Please complete the form...');
    }
    this.setState(() => ({ loading: true, loadingMessage: 'Signing In...' }));
    this.props.actions.login({
      email: this.state.email,
      password: this.state.password,
    });
  };
  handleCloseModal = () => {
    this.setState(() => ({
      loading: false,
      loadingComplete: false,
      loadingMessage: null,
    }));
    this.state.auth && this.props.history.push('/');
  };
  render() {
    const actions = [
      <FlatButton
        label="Ok"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleCloseModal}
      />,
    ];

    const {
      store: { app },
    } = this.props;
    return (
      <div style={{ marginTop: app.fromWrapper ? '70px' : '70px' }}>
        <TitlePanel
          title={this.state.title}
          subtitle="Please complete the following form"
        />
        <Form
          stateValues={this.state}
          fields={fields}
          handleOnChange={this.handleOnChange}
        />
        <Panel right="true">
          <Button label="Sign In" onPress={this.handleSubmit} />
        </Panel>
        <Dialog
          title={this.state.loadingMessage}
          actions={
            this.state.loading && this.state.loadingComplete ? actions : null
          }
          modal={true}
          open={this.state.loading}
          onRequestClose={this.handleCloseModal}
        >
          {this.state.loading && !this.state.loadingComplete ? (
            <CircularProgress />
          ) : (
            <p>{this.state.auth ? 'Success' : 'fail'}</p>
          )}
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
    login: bindActionCreators(login, dispatch),
    resetApp: bindActionCreators(resetApp, dispatch),
  },
});

export default connect(mapState, mapDispatch)(SignIn);
