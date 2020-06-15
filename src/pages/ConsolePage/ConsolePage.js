import React, {useState} from 'react';
import {connect} from 'react-redux';
import Header from '../../components/Header/Header';
import Console from '../../components/Console/Console';
import {Wrapper} from '../../styled-components/Wrapper';
import {ConsoleContainer} from '../../styled-components/Console';
import FullScreen from 'react-full-screen';

export const ConsolePage = () => {
  const [isFullScreenMode, setFullScreenMode] = useState(false);

  const handleChangeMode = () => {
    setFullScreenMode(!isFullScreenMode)
  };

  return (
    <FullScreen enabled={isFullScreenMode} onChange={setFullScreenMode}>
      <Wrapper>
        <ConsoleContainer>
          <Header isFullScreenMode={isFullScreenMode} onClick={handleChangeMode}/>
          <Console/>
        </ConsoleContainer>
      </Wrapper>
    </FullScreen>
  );
};


const mapStateToProps = state => ({
  isFullScreen: state.viewSettings.isFullScreen,
});

export default connect(mapStateToProps)(ConsolePage);