import React from 'react';

import SvgIcon from '../SvgIcon/SvgIcon';
import {FormAlertText, FormAlertTittle, IconBox, StyledFormAlert} from '../../styled-components/StyledFormAlert';
import svgIcon from '../../assets/meh.svg';

const FormAlert = ({title, text}) => (
  <StyledFormAlert>
    <IconBox>
      <SvgIcon svgUrl={svgIcon}/>
    </IconBox>
    <div>
      <FormAlertTittle>{title}</FormAlertTittle>
      <FormAlertText>{text}</FormAlertText>
    </div>
  </StyledFormAlert>
);

export default FormAlert;