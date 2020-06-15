import React from 'react';
import {SpanText} from '../../styled-components/StyledLabel';

const Label = ({errors, value, labelHint}) => (
  <SpanText errors={errors} labelHint={labelHint}>{value}</SpanText>
);

export default Label;