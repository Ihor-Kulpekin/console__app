import React from 'react';
import styled from 'styled-components';

const StyledImg = styled.img`
    border-left: ${({className}) => className ? null : '1px solid rgba(0, 0, 0, 0.2)'};
    box-shadow: -15px 0 7px -3px rgba(#f6f6fa, .8);
    position: relative;
    
    fill:${({className}) => className ? '#0D0D0D' : null};
    display: ${({className}) => className ? 'inline-block' : null};
    transition: ${({className}) => className ? 'all .2s' : null};

    &:not(:last-child) {
        margin-right: ${({className}) => className ? '.8rem' : null};
    }
        
    &:hover {
        filter: ${({className}) => className ? 'invert(29%) sepia(91%) saturate(6321%) hue-rotate(218deg) brightness(97%) contrast(106%)' : null};
    }

    &:focus {
        filter: ${({className}) => className ? 'invert(29%) sepia(91%) saturate(6321%) hue-rotate(218deg) brightness(97%) contrast(106%)' : null};
    }        
`;

const SvgIcon = ({svgUrl, className}) => (
  <StyledImg className={className} src={svgUrl} alt="icon"/>
);
export default SvgIcon;