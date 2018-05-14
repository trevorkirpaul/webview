import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  border: 1px solid #383838;
  background: none;
  color: #383838;
  padding: 5px 10px;
  &:hover {
    cursor: pointer;
  }
`;

export default ({ label, onPress }) => {
  return <Button onClick={onPress}>{label}</Button>;
};
