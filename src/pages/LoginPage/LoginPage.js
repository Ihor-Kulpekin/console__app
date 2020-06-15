import React from 'react';
import validationSchema from '../..//validation/validationSchema';
import Logo from '../../components/Logo/Logo';
import LoginForm from '../../components/LoginForm/LoginForm';
import {Wrapper} from '../../styled-components/Wrapper';
import {Login} from '../../styled-components/Login';
import LinkGit from '../../components/LinkGit/LinkGit';

const LoginPage = () => {

    return (
        <Wrapper>
            <Login>
                <Logo className="login__logo"/>
                <LoginForm 
                    validationSchema={validationSchema}
                />
              <LinkGit href="https://github.com/AMisnikov/sendsay-test" name="@AMisnikov"/>
            </Login>
        </Wrapper>
    );
};

export default LoginPage;