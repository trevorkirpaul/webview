import React, { Component } from 'react';
import Title from '../reusable/Title';
import BodyText from '../reusable/BodyText';
import PanelMedium from '../reusable/PanelMedium';

export default class Home extends Component {
  render() {
    return (
      <PanelMedium>
        <Title title="Home" subtitle="Welcome To An Amazing App" />
        <BodyText text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, hic itaque commodi vel dolorem veritatis recusandae fugiat distinctio non corrupti, quasi, labore ut perferendis ullam velit aliquam cumque quidem maiores." />
      </PanelMedium>
    );
  }
}
