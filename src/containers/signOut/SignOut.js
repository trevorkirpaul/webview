import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { resetApp } from '../../redux/actions/app';
import TitlePanel from '../../reusable/TitlePanel';
import Button from '../../reusable/Button';
import Panel from '../../reusable/Panel';
// import Dialog from 'material-ui/Dialog';
// import RaisedButton from 'material-ui/RaisedButton';

class SignOut extends Component {
  state = {
    open: false,
  };
  componentWillReceiveProps(nextProps) {}
  handleSignOut = () => {
    this.props.actions.resetApp();
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <TitlePanel
          title="Sign Out"
          subtitle="Are you sure?"
          body="Thank you for using Insurance Plans. For more info please view our FAQ."
        />
        <Panel>
          <Button label="Confirm Sign Out" onPress={this.handleSignOut} />
        </Panel>
      </div>
    );
  }
}

const mapState = state => ({});

const mapDispatch = dispatch => ({
  actions: {
    resetApp: bindActionCreators(resetApp, dispatch),
  },
});

export default connect(mapState, mapDispatch)(SignOut);
