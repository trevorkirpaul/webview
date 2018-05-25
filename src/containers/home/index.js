import React, { Component } from 'react';
import { connect } from 'react-redux';
import TitlePanel from '../../reusable/TitlePanel';
import RaisedButton from 'material-ui/RaisedButton';
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
    return (
      <div style={{ paddingTop: app.fromWrapper ? '10px' : '70px' }}>
        <TitlePanel
          title={this.state.title}
          subtitle="Amazing Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut. 804-423-2342"
        />
        <TitlePanel
          title={this.state.title}
          subtitle="Amazing Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut. 804-423-2342"
        />
        <TitlePanel
          title={this.state.title}
          subtitle="Amazing Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut. 804-423-2342"
        />
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
