import styled from 'styled-components';

export const StyledTittleApp = styled.h1`
    font-size: ${({className}) => className === 'login__heading' ? '2.4rem' : '2rem'};
    color: #0D0D0D;
    font-weight: normal;
    margin-top: 0;
`;