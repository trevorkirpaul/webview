import React, { Component } from 'react';
import Title from '../reusable/Title';
import { Container } from 'reactstrap';
import BootForm from '../reusable/BootForm';
import Modal from '../reusable/Modal';

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: false,
    };
  }
  handleSubmit = () =>
    this.setState(() => ({ isVisible: !this.state.isVisible }));
  toggleModal = () =>
    this.setState(() => ({ isVisible: !this.state.isVisible }));
  render() {
    return (
      <Container>
        <Title
          title="Create Account"
          subtitle="Complete this form in order to create an account"
        />
        <BootForm handleSubmit={this.handleSubmit} />
        <Modal
          isVisible={this.state.isVisible}
          toggleModal={this.toggleModal}
          body="This is currently placeholder information"
          title="Create Account?"
        />
      </Container>
    );
  }
}
