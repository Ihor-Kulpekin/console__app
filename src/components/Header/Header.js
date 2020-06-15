import React from 'react';
import Logo from '../Logo/Logo';
import User from '../User/User';
import BtnToggleScreen from '../BtnToggleScreen/BtnToggleScreen';
import {HeaderActions, HeaderWrapper} from '../../styled-components/Header';
import TittleApp from '../TittleApp/TittleApp';
import BtnAction from '../BtnAction/BtnAction';
import {connect} from 'react-redux';
import {startLogOut} from '../../actions/authActions';
import logoutSvg from './log-out.svg';

const Header = ({startLogOut, onClick, isFullScreenMode}) => (
  <HeaderWrapper>
    <Logo className="header__logo"/>
    <TittleApp className="main-heading">API - консолька</TittleApp>
    <HeaderActions>
      <User/>
      <BtnAction onClick={startLogOut} svgUrl={logoutSvg} spanText="Выйти"/>
      <BtnToggleScreen isFullScreenMode={isFullScreenMode} onClick={onClick} className="header__btn-toggle-screen"/>
    </HeaderActions>
  </HeaderWrapper>
);

const mapDispatchToProps = dispatch => ({
  startLogOut: () => dispatch(startLogOut()),
});

export default connect(undefined, mapDispatchToProps)(Header);