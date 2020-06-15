import React from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Console from '../../components/Console/Console';
import {Wrapper} from '../../styled-components/Wrapper';
import {ConsoleContainer} from '../../styled-components/Console';

export const ConsolePage = ({ isFullScreen }) => (
    <Wrapper>
        <ConsoleContainer isFullScreen={isFullScreen}>
            <Header />
            <Console /> 
        </ConsoleContainer>
    </Wrapper>
);


const mapStateToProps = state => ({
    isFullScreen: state.viewSettings.isFullScreen
});

export default connect(mapStateToProps)(ConsolePage);