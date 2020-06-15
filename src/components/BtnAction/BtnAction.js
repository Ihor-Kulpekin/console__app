import React from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';
import {StyledBtnAction, StyledSpan} from '../../styled-components/StyledBtnAction';

export const BtnAction = ({onClick, spanText, svgUrl}) => {
  return (
    <StyledBtnAction onClick={onClick} type="button">
      <StyledSpan>{spanText}</StyledSpan>
      <SvgIcon svgUrl={svgUrl} className="header__icon"/>
    </StyledBtnAction>
  );
};

export default BtnAction;



