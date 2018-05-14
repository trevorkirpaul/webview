import React, { Component } from 'react';
import Title from '../reusable/Title';
import BodyText from '../reusable/BodyText';
import PanelMedium from '../reusable/PanelMedium';
import Form from '../reusable/form';

export default class SignIn extends Component {
  render() {
    return (
      <PanelMedium>
        <Title title="Sign In" />
        <BodyText text="Please complete the following form" />
        <Form />
      </PanelMedium>
    );
  }
}
