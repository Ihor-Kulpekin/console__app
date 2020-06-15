import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleScreenMode } from '../../actions/viewSettingsActions';
import SvgIcon from '../SvgIcon/SvgIcon';
import fullScreenSvg from './full-screen.svg';
import notFullScreenSvg from './not-full-screen.svg';

const StyledButtonToggleScreen = styled.button`
    outline: none;
    cursor: pointer;
    background-color: transparent;
    color: #0D0D0D;
    display: flex;
    align-items: center;
    font-size: 1.6rem;
    line-height: 2rem;
    transition: all .2s;
    padding: .5rem;
    border: 2px solid transparent;
    border-radius: .7rem;

    &:hover {
        color: #0055FB;
    }

    &:focus {
        border-color: #45A5FF;
        color: #0055FB;
    }
`;

export const BtnToggleScreen = ({ isFullScreenMode, onClick }) => {

    return (
        <StyledButtonToggleScreen type="button" onClick={onClick}>
            { isFullScreenMode ? (
                <SvgIcon svgUrl={notFullScreenSvg}
                    className="btn-secondary__icon"
                />
            ) : (
                <SvgIcon svgUrl={fullScreenSvg}
                    className="btn-secondary__icon"
                />
            ) }
        </StyledButtonToggleScreen>
    );
};

const mapStateToProps = state => ({
    isFullScreen: state.viewSettings.isFullScreen
});

const mapDispatchToProps = dispatch => ({
    toggleScreenMode: () => dispatch(toggleScreenMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnToggleScreen);



