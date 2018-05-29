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

const iconStyles = {
  fontSize: 65,
};

const Icon = ({ color, icon = 'home', size }) => (
  <FontIcon
    className="material-icons"
    style={{ fontSize: size || 65 }}
    color={color || COLORS.white}
  >
    {icon}
  </FontIcon>
);

export default Icon;
