import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 15px;
  padding: 15px;
`;
const Title = styled.h1`
  color: #383838;
  font-weight: 300;
  font-size: 5em;

  margin: 10px 0 15px 0;
  padding: 0;
`;
const SubTitle = styled.h2`
  color: #383838;
  font-weight: 700;
  font-size: 1.5em;

  margin: 0;
  padding: 0;
`;

export default ({ title, subtitle }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
    </Wrapper>
  );
};
