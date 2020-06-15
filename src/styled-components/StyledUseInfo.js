import styled from 'styled-components';

export const StyledUserInfo = styled.div`
    font-size: 1.6rem;
    line-height: 2rem;
    color: #0D0D0D;
    display: flex;
    padding: 2.5px 1rem;
    border: 1px solid #c4c4c4;
    border-radius: .5rem;

    & > *:not(:last-child) {
        margin-right: 3px;
    }
`;

export const Dots = styled.span`
    color: #C4C4C4;
`;