import React from 'react';

import {StyledLogo, StyledLogoImg} from '../../styled-components/Logo';
import logo from '../../assets/logo.png'

const Logo = ({ className }) => (
  <StyledLogo className={className}>
    <StyledLogoImg src={logo} alt="logo" className={className}/>
  </StyledLogo>
);

export default Logo;