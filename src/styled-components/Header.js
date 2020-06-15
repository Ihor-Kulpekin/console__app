import styled from 'styled-components';

export const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
    padding: 1rem 1.5rem;
    background-color: #F6F6F6;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;

export const HeaderActions = styled.div`
    display: flex;
        align-items: center;
        margin-left: auto;

    & > *:not(:first-child) {
            margin-left: 3rem;
    }
`;