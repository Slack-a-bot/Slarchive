import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';
import './styles.css'

import Menu from './components/menu'
import Demo from './demo';
import EmojisContainer from './components/EmojisContainer';

function App() {
  return (
    <div>
      <Menu />
      <EmojisContainer />
      <StyledEngineProvider injectFirst>
        <Demo />
      </StyledEngineProvider>
    </div>
  );
}

export default App;
