import React from 'react';
import History from '../History/History';
import ConsoleForm from '../ConsoleForm/ConsoleForm';
import {WrapperConsole} from '../../styled-components/Console';

const Console = () => {

    return (
        <WrapperConsole>
            <History />
            <ConsoleForm />
        </WrapperConsole>
    );

};

export default Console;