import * as React from 'react';
import ReactDOM from 'react-dom/client';
import Demo from './demo';
import { StyledEngineProvider } from '@mui/material/styles';
import Menu from './components/menu';

function App() {
  return (
    <div>
      <Menu />
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
