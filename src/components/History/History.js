import React, {useRef} from 'react';
import {connect} from 'react-redux';

import Request from '../Request/Request';
import getSortedRequests from '../../selectors/requests';
import {startClearHistory} from '../../actions/historyActions';
import {
  DeleteHistoryBtn,
  EmptyMessage,
  HistoryDeleteBox,
  StyledHistory,
  StyledHistoryList, StyledListItem,
} from '../../styled-components/StyledHistory';
import deleteBtnSvg from './deleteBtn.svg';

export const History = ({history, clearHistory}) => {

  const historyList = useRef(null);

  const handleMouseEnter = () => {
    window.addEventListener('wheel', wheelListener);
  };

  const handleMouseLeave = () => {
    window.removeEventListener('wheel', wheelListener);
  };

  const wheelListener = (e) => {
    const currentPos = historyList.current.scrollLeft;

    if (e.deltaY > 0) {
      historyList.current.scrollLeft = currentPos + 100;
    } else {
      historyList.current.scrollLeft = currentPos - 100;
    }
  };

  const handleScroll = (e) => {

    const openedDropdown = e.target.querySelector('.request__dropdown--open');

    if (openedDropdown) {
      const parentHistoryItem = openedDropdown.parentNode.parentNode.parentNode;
      const dropdownWidth = openedDropdown.offsetWidth;

      const dropdownPosition = parentHistoryItem.offsetLeft - e.target.scrollLeft + (parentHistoryItem.offsetWidth - dropdownWidth);

      openedDropdown.style.left = dropdownPosition + 'px';

      const isOverflow = dropdownPosition < 0 || dropdownPosition > (e.target.offsetWidth - openedDropdown.offsetWidth + 10);

      if (isOverflow) {
        openedDropdown.style.opacity = 0;
        openedDropdown.style.visibility = 'hidden';
      } else {
        openedDropdown.style.opacity = 1;
        openedDropdown.style.visibility = 'visible';
      }

    }
  };


  return (
    <StyledHistory>
      {history.length > 0 ? (
        <>
          <StyledHistoryList
            ref={historyList}
            onScroll={handleScroll}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {history.map(request => (
              <StyledListItem key={request.id}>
                <Request request={request}/>
              </StyledListItem>
            ))}
          </StyledHistoryList>
          <HistoryDeleteBox>
            <DeleteHistoryBtn onClick={clearHistory}>
              <img src={deleteBtnSvg} alt="btn"/>
            </DeleteHistoryBtn>
          </HistoryDeleteBox>
        </>
      ) : (
        <EmptyMessage>История запросов пуста</EmptyMessage>
      )}
    </StyledHistory>
  );
};

const mapStateToProps = state => ({
  history: getSortedRequests(state.history),
});

const mapDispatchToProps = dispatch => ({
  clearHistory: () => dispatch(startClearHistory()),
});

export default connect(mapStateToProps, mapDispatchToProps)(History);
