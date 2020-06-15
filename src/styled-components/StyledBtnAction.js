import styled from 'styled-components';

export const StyledBtnAction = styled.button`
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: #0D0D0D;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    line-height: 2rem;
    transition: border .2s;
    padding: .5rem;
    border: 2px solid transparent;
    border-radius: .7rem;

    &:hover {
        color: #0055FB;
    filter: invert(29%) sepia(91%) saturate(6321%) hue-rotate(218deg) brightness(97%) contrast(106%);
    }

    &:focus {
        border-color: #45A5FF;
        color: #0055FB;
        filter: invert(29%) sepia(91%) saturate(6321%) hue-rotate(218deg) brightness(97%) contrast(106%);
    }
`;

export const StyledSpan = styled.span`
    margin-right: 1.1rem;
`;