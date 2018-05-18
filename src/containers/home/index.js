import React, { Component } from 'react';
import TitlePanel from '../../reusable/TitlePanel';
import RaisedButton from 'material-ui/RaisedButton';
export default class Home extends Component {
  printSavedName = () => {
    const name = localStorage.getItem('name');

    if (name) {
      localStorage.removeItem('name');
      // window.postMessage('Name cleared');
    } else {
      // window.postMessage('No Name found');
    }
  };
  render() {
    return (
      <div>
        <TitlePanel
          title="Stay Healthy"
          subtitle="Overpriced Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut."
        />
        <RaisedButton label="Clear Saved Name" onClick={this.printSavedName} />
      </div>
    );
  }
}
