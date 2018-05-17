import React from 'react';
import dog from '../../img/dog.jpeg';
import styled from 'styled-components';
import COLORS from '../../utils/constants';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PanelLeft = styled.div`
  padding: 15px;
  background-color: ${COLORS.white};
  font-family: 'Roboto', sans-serif;
  flex: 2;
`;
const PanelLeftTitle = styled.h2`
  color: ${COLORS.black};
`;

const PanelLeftSubTitle = styled.h3`
  color: ${COLORS.black};
`;

const PanelLeftBody = styled.p`
  color: ${COLORS.black};
  margin-bottom: 35px;
`;
const ImgWrapper = styled.div`
  background-color: ${COLORS.purple};
  flex: 1;
`;
const Img = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${COLORS.black};
  border: 1px solid #383838;
  padding: 5px 10px;
  &:hover {
    color: ${COLORS.blue};
    border-color: ${COLORS.blue};
  }
`;
export default () => {
  return (
    <Wrapper>
      <PanelLeft>
        <PanelLeftTitle>Insurance Selector</PanelLeftTitle>
        <PanelLeftSubTitle>"It's as easy as 1-2-3"</PanelLeftSubTitle>
        <PanelLeftBody>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae odit
          distinctio pariatur cupiditate? Tempora explicabo, molestias ex
          expedita quibusdam quo?
        </PanelLeftBody>
        <StyledLink to="/insurance-selector">Begin</StyledLink>
      </PanelLeft>
      <ImgWrapper>
        <Img src={dog} />
      </ImgWrapper>
    </Wrapper>
  );
};
