import React from 'react';
import validationSchema from '../../validation/validationSchema';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Wrapper} from '../../styled-components/StyledWrapper';
import {Login} from '../../styled-components/StyledLogin';
import LinkGit from '../../components/LinkGit/LinkGit';

const LoginPage = () => {

    return (
        <Wrapper>
            <Login>
                <Logo className="login__logo"/>
                <LoginForm 
                    validationSchema={validationSchema}
                />
              <LinkGit href="https://github.com/Ihor-Kulpekin/console__app" name="@Ihor-Kulpekin"/>
            </Login>
        </Wrapper>
    );
};

export default LoginPage;