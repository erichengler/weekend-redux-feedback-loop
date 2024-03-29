import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
import Header from '../Header/Header'
import { createTheme, ThemeProvider } from '@mui/material/styles';

// Adding theme from MUI
const theme = createTheme({
  palette: {
    primary: {
      main: '#1B7F7A',
    },
    secondary: {
      main: '#4C4A59'
    }
  }
});

function App() {

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Router>
          <Header />

          <Route exact path="/">
            <Feeling />
          </Route>

          <Route exact path="/understanding">
            <Understanding />
          </Route>

          <Route exact path="/support">
            <Support />
          </Route>

          <Route exact path="/comments">
            <Comments />
          </Route>

          <Route exact path="/review">
            <Review />
          </Route>

          <Route exact path="/success">
            <Success />
          </Route>

          <Route exact path="/admin">
            <Admin />
          </Route>

        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
