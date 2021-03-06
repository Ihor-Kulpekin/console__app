import React, { useState, useRef, useEffect } from 'react'
import { connect } from 'react-redux';
import beautify from 'js-beautify';

import { setFields } from '../../actions/consoleFormActions';
import { startRemoveRequest, sendExistingRequest } from '../../actions/historyActions';
import Dropdown from '../Dropdown/Dropdown';
import {
    BtnActions, CopyMessage,
    RequestActions, RequestTittle,
    RequestWrapper,
    StyledDots, StyledRequest,
    StyledStatusIcon,
} from '../../styled-components/StyledRequest';

export const Request = ({ request, removeRequest, runRequest, setFields }) => {
    const requestBlock = useRef(null);
    const dropdownEl = useRef(null);

    const [isCopied, setCopiedStatus] = useState(false);
    const [isDropdownOpen, toggleDropdown] = useState(false);

    const outsideClickListener = (e) => {
        const target = e.target;

        if(target !== dropdownEl.current && !dropdownEl.current.contains(target) && isDropdownOpen) {
            toggleDropdown(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', outsideClickListener);

        return () => { document.removeEventListener('click', outsideClickListener) };
    });


    const setDropDownPosition = () => {
        const parentHistoryItem = requestBlock.current.parentNode;
        const historyBlock = parentHistoryItem.parentNode;
        const requestPosition = requestBlock.current.getBoundingClientRect();
        const currentHeight = document.documentElement.clientHeight;
        const freeSpaceBelowItem = currentHeight - (requestPosition.top + requestPosition.height);

        if(freeSpaceBelowItem < 151) {
            dropdownEl.current.style.top = 'auto';
            dropdownEl.current.style.bottom = '4rem';
        } else {
            dropdownEl.current.style.top = '4rem';
            dropdownEl.current.style.bottom = 'auto';
        }

        dropdownEl.current.style.left = parentHistoryItem.offsetLeft - historyBlock.scrollLeft + (parentHistoryItem.offsetWidth - 128) + 'px';
    };

    const handleClickOnActions = () => {
        setDropDownPosition();
        toggleDropdown(!isDropdownOpen);
    };

    const handleClickOnRequest = () => {
        setFields({
            requestText: beautify(request.requestText),
            responseText: beautify(request.responseText),
            errors: [],
            isRequestTextValid: true,
            isSuccess: request.isSuccess

        });
    };

    const handleRunRequest = () => {
        runRequest(request.id, JSON.parse(request.requestText));
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(request.requestText).then(() => {
            setCopiedStatus(true);

            setTimeout(() => {
                setCopiedStatus(false);
            }, 1000);
        });
    };

    const handleRemove = () => {
        removeRequest(request.id);
    };
    
    return (
        <StyledRequest ref={requestBlock}  onClick={handleClickOnActions}>
            <RequestWrapper onClick={handleClickOnRequest}  className="request__wrapper">
                <StyledStatusIcon isSuccess={request.isSuccess}/>
                <RequestTittle>{JSON.parse(request.requestText).action}</RequestTittle>
                {isCopied && <CopyMessage>Скопировано</CopyMessage>}
            </RequestWrapper>
            <RequestActions>
                <BtnActions>
                    <StyledDots/>
                </BtnActions>
                <Dropdown
                    ref={dropdownEl} 
                    className={ isDropdownOpen ? "request__dropdown request__dropdown--open" : "request__dropdown" }
                    onRun={handleRunRequest}
                    onCopy={handleCopy}
                    onRemove={handleRemove}
                />
            </RequestActions>
        </StyledRequest>
    );
};

const mapDispatchToProps = dispatch => ({
    setFields: (request) => dispatch(setFields(request)),
    removeRequest: (id) => dispatch(startRemoveRequest(id)),
    runRequest: (id, request) => dispatch(sendExistingRequest(id, request))
});

export default connect(undefined, mapDispatchToProps)(Request);