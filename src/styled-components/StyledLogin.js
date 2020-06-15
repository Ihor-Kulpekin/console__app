import styled from 'styled-components';

export const Login = styled.div`
    position: relative;
    width: 100%;
    max-width: 52rem;
    min-width: 40rem;
    display: flex;
    flex-direction: column;
`;

export const StyledLoginForm = styled.div`
    background-color: #fff;
    box-shadow: 0 .4rem 1rem rgba(0, 0, 0, 0.1);
    border-radius: .5rem;
    padding: 4rem 3rem;
`;

export const StyledForm = styled.form`
    & > *:not(:last-child) {
            margin-bottom: 20px;
    }
`;
