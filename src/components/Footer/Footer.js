import React from 'react';

import formatSvg from './align-right.svg';
import BtnAction from '../BtnAction/BtnAction';
import LinkGit from '../LinkGit/LinkGit';
import {StyledFooter} from '../../styled-components/StyledFooter';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const Footer = ({formData, isFetching, formatRequest}) => (
  <StyledFooter>
    <BtnPrimary disabled={!!(!formData.isRequestTextValid || isFetching)} text="Отправить" isFetching={isFetching}/>
    <LinkGit href="https://github.com/Ihor-Kulpekin/console__app" className="footer_link" name="@Ihor-Kulpekin"/>
    <BtnAction onClick={formatRequest} svgUrl={formatSvg} spanText="Форматировать"/>
  </StyledFooter>
);

export default Footer;