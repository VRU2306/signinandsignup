import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import theme from './theme';
import './styles.css';
import LoginForm from './components/loginForm/';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LoginForm />
      </div>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
