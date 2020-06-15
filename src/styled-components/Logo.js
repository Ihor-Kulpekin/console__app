import styled from 'styled-components';

export const StyledLogo = styled.div`
    position: relative;
    width: ${({className}) => className==='login__logo'?'100%':null};
    max-width: ${({className}) => className==='login__logo'?'52rem':null};
    min-width: ${({className}) => className==='login__logo'?'40rem':null};
    display: flex;
    flex-direction: column;
    padding: 1rem 0;
`;

export const StyledLogoImg = styled.img`
    margin: ${({className}) => className==='login__logo'?'0 auto 2rem auto':'0 2rem 0 0'};
`;