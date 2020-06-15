import React from 'react';
import {ErrorMessage, InputField, StyledInputWrapper, StyledLabel} from '../../styled-components/Input';
import Label from '../Label/Label';

const Input = ({labelText, labelHint, errors, ...otherProps }) => (
  <StyledInputWrapper>
    {labelText && (
      <StyledLabel>
        <Label errors={errors} value={labelText}/>
        {labelHint && <Label errors={errors} value={labelHint} labelHint="labelHint"/>}
      </StyledLabel>
    )}
    <InputField errors={errors} {...otherProps}/>
    {
      errors && errors.length > 0 && (
        errors.map((error, index) => <ErrorMessage key={index}>{error}</ErrorMessage>)
      )
    }
  </StyledInputWrapper>
);

export default Input;