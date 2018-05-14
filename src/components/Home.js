import React, { Component } from 'react';
import Title from '../reusable/Title';
import { Container } from 'reactstrap';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Title title="Health" subtitle="You Need Insurance" />
      </Container>
    );
  }
}
