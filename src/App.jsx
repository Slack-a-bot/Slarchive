import * as React from 'react';
import ReactDOM from 'react-dom/client';
import MessageBox from './components/MessageBox';
import Demo from './demo';
import { StyledEngineProvider } from '@mui/material/styles';

function App() {
  return (
    <div>
      <MessageBox />
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
