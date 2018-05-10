import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 15px;
  padding: 15px;
`;

const BodyText = styled.p`
  color: #383838;
  margin: 0;
  padding: 0;
`;
export default ({ text }) => {
  return (
    <Wrapper>
      <BodyText>{text}</BodyText>
    </Wrapper>
  );
};
