import React, { Component } from 'react';
import TitlePanel from '../../reusable/TitlePanel';

export default class Home extends Component {
  render() {
    return (
      <div>
        <TitlePanel
          title="Stay Healthy"
          subtitle="Overpriced Health Care"
          body="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi exercitationem, iure porro unde obcaecati suscipit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, aut."
        />
      </div>
    );
  }
}
