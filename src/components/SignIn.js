import React, { Component } from 'react';
import Title from '../reusable/Title';
import BodyText from '../reusable/BodyText';
import PanelMedium from '../reusable/PanelMedium';

export default class SignIn extends Component {
  render() {
    return (
      <PanelMedium>
        <Title title="Sign In" />
        <BodyText text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, molestiae." />
      </PanelMedium>
    );
  }
}
