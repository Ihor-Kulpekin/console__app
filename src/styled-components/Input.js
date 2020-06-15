import styled from 'styled-components';

export const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLabel = styled.label`
  margin-bottom: .5rem;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const InputField = styled.input`
  padding: .9rem 1rem;
        border-radius: .5rem;
        border: ${({errors}) => errors.length > 0 ? '1px solid rgba(207, 44, 0, .2)' : '1px solid rgba(0, 0, 0, .2)'};
        font-size: 1.8rem;
        color: #0D0D0D;
        cursor: pointer;
        transition: all .2s;
        font-weight: normal;
        &:hover {
            border-color: ${({errors}) => errors.length > 0 ? 'rgba(207, 44, 0, .2)' : 'rgba(0, 0, 0, .4)'};
        }

        &:focus {
            outline: none;
            border-color: ${({errors}) => errors.length > 0 ? 'rgba(207, 44, 0, .2)' : 'rgba(0, 0, 0, .4)'};
            box-shadow: ${({errors}) => errors.length > 0 ? '0 0 5px rgba(207, 44, 0, 0.5)' : null};
        }
`;

export const ErrorMessage = styled.p`
  font-size: 1.2rem;
  line-height: 1.7rem;
  margin-top: 1rem;
  color: #CF2C00;
`;