import React, { Component } from 'react';
import TitlePanel from '../../reusable/TitlePanel';
// import INSURANCE_DATA from '../../API/insurancePackages.json';
import FindPackage from './FindPackage';

export default class InsurancePackages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      packageExists: false,
    };
  }
  render() {
    const { packageExists } = this.state;
    return (
      <div>
        <TitlePanel
          title="Insurance Packages"
          subtitle={
            packageExists
              ? 'View Your Insurance Package'
              : 'Choose An Insurance Package'
          }
        />
        {this.state.packageExists ? null : <FindPackage />}
      </div>
    );
  }
}
