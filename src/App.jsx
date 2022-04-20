import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './styles.css'

import MessageBox from './components/MessageBox';
import Demo from './demo';
import EmojisContainer from './components/EmojisContainer';

function App() {
  return (
    <div>
      {/* <MessageBox /> */}
      <EmojisContainer />
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
