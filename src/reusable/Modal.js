import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }
  toggle = () => {
    this.props.toggleModal();
  };

  render() {
    const { body, title, buttonOne, buttonTwo } = this.props;
    return (
      <Modal isOpen={this.props.isVisible} className={this.props.className}>
        <ModalHeader toggle={this.toggle}>{title}</ModalHeader>
        <ModalBody>{body}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.toggle}>
            {buttonOne || 'Okay'}
          </Button>{' '}
          <Button color="secondary" onClick={this.toggle}>
            {buttonTwo || 'Cancel'}
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalView;
