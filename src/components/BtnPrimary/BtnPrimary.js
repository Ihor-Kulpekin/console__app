import React from 'react';
import styled from 'styled-components';
import Loader from '../Loader/Loader';

const StyledButton = styled.button`
font-size: 1.6rem;
    min-height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.1rem;
    color: #fff;
    background: ${({isDisabled}) => isDisabled ?
  'linear-gradient(0deg, #C4C4C4, #C4C4C4), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%)' :
  'linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4'};
    border: none;
    outline: none;
    border-radius: .5rem;
    min-width: 11rem;
    cursor: pointer;
    transition: all .2s;
    position: relative;
    z-index: 2;


    &:hover {
        background: ${({isDisabled}) => isDisabled ? null : 'linear-gradient(0deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4'};
    }

    &:focus {
        box-shadow: 0 0 0 2px #45A5FF;
    }

    &:active {
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), linear-gradient(180deg, #45A6FF 0%, #0055FB 100%), #C4C4C4;
        box-shadow: none;
    }

    &[disabled] {
        cursor: not-allowed;
    }
`;

const BtnPrimary = ({disabled, text, isFetching}) => (
  <StyledButton type="submit" isDisabled={disabled} disabled={disabled}>
    {isFetching ? <Loader size={20}/> : text}
  </StyledButton>
);

export default BtnPrimary;