import React from 'react';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';
// import {
//   RadioButton as Radio,
//   RadioButtonGroup,
// } from 'material-ui/RadioButton';
// import Checkbox from 'material-ui/Checkbox';
// import { Form, Field } from 'react-final-form';
import styled from 'styled-components';
import COLORS from '../utils/constants';

const Wrapper = styled(Paper)`
  padding: 15px;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const FormLabel = styled.p`
  font-weight: 300;
  color: ${COLORS.grey};
`;

const FormLabelWrap = styled.div`
  min-width: 100px;
`;

// helper fxn
// const validate = values => {
//   const errors = {};
//   if (!values.firstName) {
//     errors.firstName = 'Required';
//   }
//   if (!values.lastName) {
//     errors.lastName = 'Required';
//   }
//   if (!values.email) {
//     errors.email = 'Required';
//   }
//   return errors;
// };

const Input = ({ name, value, hintText, onChange, handleOnChange, type }) => (
  <InputWrapper>
    <FormLabelWrap>
      <FormLabel>{name}</FormLabel>
    </FormLabelWrap>
    <TextField
      type={type}
      name={name}
      value={value}
      onChange={handleOnChange}
    />
  </InputWrapper>
);

// FORM

export default ({ onSubmit, email, handleOnChange, fields, stateValues }) => {
  return (
    <Wrapper>
      {fields
        .filter(f => f.type === 'email' || f.type === 'password')
        .map(field => (
          <Input
            key={field.id}
            type={field.type}
            name={field.name}
            value={stateValues.name}
            hintText={field.name}
            handleOnChange={handleOnChange}
          />
        ))}
    </Wrapper>
  );
};
