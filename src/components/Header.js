import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 5px;
  margin: 5px;
`;

const NavWrap = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
`;

const NavItem = styled.li`
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #383838;
  border: 1px solid #383838;
  padding: 3px 10px;

  &:hover {
    cursor: pointer;
  }
`;

export default () => {
  return (
    <Wrapper>
      <NavWrap>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/signin">Sign In</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/signout">Sign Out</StyledLink>
        </NavItem>
      </NavWrap>
    </Wrapper>
  );
};
