import React from 'react';
import styled from 'styled-components';

const Panel = styled.div`
  margin: 0;
  padding: 0;
  max-width: 500px;
`;
export default ({ children }) => {
  return <Panel>{children}</Panel>;
};
