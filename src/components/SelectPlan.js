import React, { Component } from 'react';
import Title from '../reusable/Title';
import BodyText from '../reusable/BodyText';
import PanelMedium from '../reusable/PanelMedium';

export default class SelectPlan extends Component {
  render() {
    return (
      <PanelMedium>
        <Title title="Select Plan" subtitle="Insurance Plan Selection" />
      </PanelMedium>
    );
  }
}
