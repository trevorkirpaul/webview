import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class BootForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      accountType: null,
    };
  }
  handleChange = e => {
    const { name, value } = e.target;
    this.setState(() => ({ [name]: value }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.handleSubmit();
  };
  render() {
    const { email, password } = this.state;
    return (
      <Form>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder="email"
            onChange={this.handleChange}
            value={email}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            onChange={this.handleChange}
            value={password}
          />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Account Type</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>Personal</option>
            <option>Business</option>
            <option>Government</option>
            <option>International</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Brief Description of Current Health</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" /> Remember Account Information
          </Label>
        </FormGroup>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </Form>
    );
  }
}
