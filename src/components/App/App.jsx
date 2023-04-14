import { HashRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';

function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

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

      </Router>
    </div>
  );
}

export default App;
