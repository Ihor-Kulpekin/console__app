import React from 'react';
import { connect } from 'react-redux';
import { startLogOut } from '../../actions/authActions'
import SvgIcon from '../SvgIcon/SvgIcon';

export const BtnLogout = ({ startLogOut, className }) => {


    return (
        <button onClick={startLogOut} className={className ? `btn-secondary ${className}` : "btn-secondary"}>
            <SvgIcon
                className="btn-secondary__icon"
                iconId="icon-logout"
                iconWidth={24}
                iconHeight={24}
                />
            <span>Выйти</span>
        </button>
    );
};


const mapDispatchToProps = dispatch => ({
    startLogOut: () => dispatch(startLogOut())
});

export default connect(undefined, mapDispatchToProps)(BtnLogout);



