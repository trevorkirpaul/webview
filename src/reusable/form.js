import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Wrapper = styled.div`
  padding: 15px;
  margin: 15px;
`;
const Input = styled.input`
  display: inline-block;
  padding: 10px 15px;
  border: none;
  background-color: #383838;
  color: antiquewhite;
  outline: none;
`;
const InputWrap = styled.div`
  margin-bottom: 15px;
`;

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleOnChange(e) {
    const { name, value } = e.target;

    this.setState(() => ({ [name]: value }));
  }
  handleSubmit() {
    const { username, password } = this.state;
    console.log({ username, password });
  }
  render() {
    return (
      <Wrapper>
        <InputWrap>
          <Input
            type="text"
            name="username"
            placeholder="username"
            onChange={this.handleOnChange}
          />
        </InputWrap>
        <InputWrap>
          <Input
            type="password"
            name="password"
            placeholder="password"
            onChange={this.handleOnChange}
          />
        </InputWrap>
        <InputWrap>
          <Button label="Sign In" onPress={this.handleSubmit} />
        </InputWrap>
      </Wrapper>
    );
  }
}
