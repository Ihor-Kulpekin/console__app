import styled from 'styled-components';

export const StyledLink = styled.a`
    display: inline-block;
    font-size: 1.6rem;
    line-height: 2rem;
    color: #999999;
    transition: all .2s;
    padding: .5rem;
    border: 1px dotted transparent;
    border-radius: .7rem;
    outline: none;
    margin: ${({className}) => className === 'footer_link' ? null : '2rem auto 0 auto'};
    
    &:focus {
        color: #0D0D0D;
        border-color: #0D0D0D;
    }


    &:hover {
        color: #0D0D0D;
        text-decoration: underline;
    }
`;