import styled from 'styled-components';

export const ConsoleContainer = styled.div`
    width: 100%;
    height: 100%;
    max-width: 144rem;
    max-height: 73rem;
    display: flex;
    flex-direction: column;
`;

export const WrapperConsole = styled.main`
    display: flex;
    flex-direction: column;
    background-color: #fff;
    flex: 1 1 100%;
`;

export const ConsoleErrors = styled.div`
    padding: 0 1.5rem;
    color: #CF2C00;
        
     & > *{
            margin-bottom: 1rem;
     }
`;

export const StyledForm = styled.form`
    flex: 1 1 100%;
    display: flex;
    flex-direction: column;
`;

export const StyledFormFields = styled.div`
    padding: 1rem 1.5rem;
    display: flex;
    flex: 1 1 100%;
`;