import React, {useReducer, useEffect} from 'react';
import {connect} from 'react-redux';

import {startLogIn} from '../../actions/authActions';
import reducer from '../../validation/validationReducer';
import {setField, setFormValidity, setLoginErr, setFetchingStatus} from '../../validation/validationActions';
import {getFieldErrors} from '../../validation/validationFunctions';
import Input from '../Input/Input';
import FormAlert from '../FormAlert/FormAlert';
import {StyledForm, StyledLoginForm} from '../../styled-components/Login';
import TittleApp from '../TittleApp/TittleApp';
import BtnPrimary from '../BtnPrimary/BtnPrimary';

const initialState = {
  login: {
    value: '',
    errors: [],
    isValid: false,
  },
  sublogin: {
    value: '',
    errors: [],
    isValid: true,
  },
  password: {
    value: '',
    errors: [],
    isValid: false,
  },
  isFormValid: false,
  isFetching: false,
  loginErr: '',
};


export const LoginForm = ({validationSchema, startLogIn}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.login.isValid && state.sublogin.isValid && state.password.isValid) {
      dispatch(setFormValidity(true));
    } else {
      dispatch(setFormValidity(false));
    }

  }, [state.password, state.login, state.sublogin]);

  const handleInputChange = (e) => {
    if (state.loginErr) {
      dispatch(setLoginErr(''));
    }

    const name = e.target.name;
    const value = e.target.value.trim();
    const errors = getFieldErrors(name, value, validationSchema);

    dispatch(setField({
      name,
      data: {
        value,
        errors,
        isValid: errors.length <= 0,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(setFetchingStatus(true));

    startLogIn({
      login: state.login.value,
      sublogin: state.sublogin.value,
      password: state.password.value,
    }).catch(err => {

      dispatch(setFetchingStatus(false));

      const message = JSON.stringify({
        id: err.id,
        explain: err.explain,
      });

      dispatch(setLoginErr(message));
    });

  };

  return (
    <StyledLoginForm>

      <StyledForm onSubmit={handleSubmit} className="login-form__form">
        <TittleApp className="login__heading"/>
        {state.loginErr && (
          <FormAlert
            title="Вход не вышел"
            text={state.loginErr}
          />
        )}
        <Input
          name="login"
          labelText="Логин"
          type="text"
          errors={state.login.errors}
          onChange={handleInputChange}
          value={state.login.value}
        />
        <Input
          name="sublogin"
          labelText="Сублогин"
          labelHint="Опционально"
          type="text"
          errors={state.sublogin.errors}
          onChange={handleInputChange}
          value={state.sublogin.value}
        />
        <Input
          name="password"
          labelText="Пароль"
          type="password"
          errors={state.password.errors}
          onChange={handleInputChange}
          value={state.password.value}
        />
        <BtnPrimary disabled={!!(!state.isFormValid || state.isFetching || state.loginErr)}
                    isFetching={state.isFetching} text="Войти"/>
      </StyledForm>
    </StyledLoginForm>
  );
};

const mapDispatchToProps = dispatch => ({
  startLogIn: (auth) => dispatch(startLogIn(auth)),
});

export default connect(undefined, mapDispatchToProps)(LoginForm);