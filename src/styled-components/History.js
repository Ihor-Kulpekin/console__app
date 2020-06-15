import styled from 'styled-components';

export const StyledHistory = styled.div`
    background-color: #F6F6F6;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
  position: relative;
`;

export const StyledHistoryList = styled.ul`
padding: 1rem 1rem 1rem 0;
flex: 1 1 100%;
font-size: 0;
white-space: nowrap;
scroll-behavior: smooth;
overflow: scroll auto;
scrollbar-width: none;
-ms-overflow-style: none;

&::-webkit-scrollbar {
    width: 0;
    height: 0;
    background: transparent;

`;

export const StyledListItem = styled.li`
    display: inline-block;

    &:not(:last-child) {
      margin-right: 1rem;
    }    
`;

export const EmptyMessage = styled.p`
    padding: 1.7rem 0;
    font-size: 1.4rem;    
`;

export const HistoryDeleteBox = styled.div`
    border-left: 1px solid rgba(0, 0, 0, 0.2);
    box-shadow: -15px 0 7px -3px rgba(#f6f6fa, .8);
    position: relative;
`;

export const DeleteHistoryBtn = styled.button`
    background-color: transparent;
    cursor: pointer;
    height: 5rem;
    width: 5rem;
    display: flex;
    border: 0;
    align-items: center;
    justify-content: center;
    position: relative;
`;