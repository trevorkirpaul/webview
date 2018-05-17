import React from 'react';
import FontIcon from 'material-ui/FontIcon';
import COLORS from '../utils/constants';
// import styled from 'styled-components';

// const Wrapper = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   width: 100%;
//   height: 100%;
// `;

const iconStyles = {};

const Icon = ({ color, icon = 'home' }) => (
  <FontIcon
    className="material-icons"
    style={iconStyles}
    color={color || COLORS.white}
  >
    {icon}
  </FontIcon>
);

export default Icon;
