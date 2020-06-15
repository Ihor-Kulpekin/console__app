import React from 'react';
import { connect } from 'react-redux';
import { toggleScreenMode } from '../../actions/viewSettingsActions';
import SvgIcon from '../SvgIcon/SvgIcon';

export const BtnToggleScreen = ({ isFullScreen, toggleScreenMode,  className }) => {

    return (
        <button onClick={toggleScreenMode} className={ className ? `btn-secondary ${className}` : "btn-secondary"}>
            { isFullScreen ? (
                <SvgIcon
                    className="btn-secondary__icon"
                    iconId="icon-defaultscreen"
                    iconWidth={18}
                    iconHeight={18}
                />
            ) : (
                <SvgIcon
                    className="btn-secondary__icon"
                    iconId="icon-fullscreen"
                    iconWidth={18}
                    iconHeight={18}
                />
            ) }
        </button>
    );
};

const mapStateToProps = state => ({
    isFullScreen: state.viewSettings.isFullScreen
});

const mapDispatchToProps = dispatch => ({
    toggleScreenMode: () => dispatch(toggleScreenMode())
});

export default connect(mapStateToProps, mapDispatchToProps)(BtnToggleScreen);



