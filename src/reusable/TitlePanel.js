import React from 'react';
import styled from 'styled-components';
import Paper from 'material-ui/Paper';
import COLORS from '../utils/constants';

const Wrapper = styled(Paper)`
  padding: 15px;
`;
const Title = styled.h1`
  color: ${COLORS.black};
`;

const SubTitle = styled.h3`
  color: ${COLORS.grey};
  font-weight: 400;
`;
const Body = styled.p`
  color: ${COLORS.black};
  font-weight: 300;
  line-height: 30px;
  font-size: 0.8em;
`;
const HalfScreen = styled.div`
  max-width: 400px;
`;

export default ({ title, subtitle, body, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      {subtitle && <SubTitle>{subtitle}</SubTitle>}
      <HalfScreen>{body && <Body>{body}</Body>}</HalfScreen>
      {content && content}
    </Wrapper>
  );
};
