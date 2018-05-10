import React, { Component } from 'react';
import Title from '../reusable/Title';
import BodyText from '../reusable/BodyText';
import PanelMedium from '../reusable/PanelMedium';

export default class SignOut extends Component {
  render() {
    return (
      <PanelMedium>
        <Title title="Sign Out" />
        <BodyText text="Goodbye" />
      </PanelMedium>
    );
  }
}
