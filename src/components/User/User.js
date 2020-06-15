import React from 'react';
import {connect} from 'react-redux';

import {Dots, StyledUserInfo} from '../../styled-components/StyledUseInfo';

export const User = ({user}) => (
  <StyledUserInfo>
    <span>{user.login}</span>
    {user.sublogin && (
      <>
        <Dots>:</Dots>
        <span>{user.sublogin}</span>
      </>
    )}
  </StyledUserInfo>

);

const mapStateToProps = state => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(User);