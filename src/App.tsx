import './App.css';
import Main from './router';
import { ThemeProvider, UserContextProvider } from './contexts';
import Theme from './styles/Theme';
import React from 'react';

class App extends React.Component {

  changeSending() {

  };

  render() {
    return (
      <ThemeProvider value={Theme}>
        <UserContextProvider>
        <Main />
        </UserContextProvider>
      </ThemeProvider>
    );
  }
  
}

export default App;
