import styled from 'styled-components';

export const SpanText = styled.span`
  font-size: ${({labelHint}) => labelHint ? '1.2rem' : '1.6rem'};
  color: ${({errors, labelHint}) =>errors && errors.length > 0? '#CF2C00' : (labelHint ? '#999999' : '#0D0D0D')};
  line-height: ${({labelHint}) => !labelHint ? '2rem' : null};
  margin-bottom: ${({labelHint}) => labelHint === 'console__label' ? '3px' : null};
`;