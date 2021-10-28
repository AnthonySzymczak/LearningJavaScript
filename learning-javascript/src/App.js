import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>

          <Route path='/' exact component = {Welcome} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
