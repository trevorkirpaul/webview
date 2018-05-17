import React from 'react';
import Paper from 'material-ui/Paper';
import styled from 'styled-components';

const Wrapper = styled(Paper)`
  padding: 15px;
  text-align: ${props => (props.right ? 'right' : 'left')};
`;

export default props => <Wrapper right={props.right}>{props.children}</Wrapper>;
