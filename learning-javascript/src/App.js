import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import Welcome from './components/Welcome';
import Intro from './components/Intro';

function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>

          <Route path='/' exact component = {Welcome} />
          <Route path='/Intro' exact component = {Intro} />
          <Route path='/IntroAlgorithms' exact component = {Welcome} />
          <Route path='/IntroAlgorithmsCont' exact component = {Welcome} />
          <Route path='/IntroAlgorithmsComplex' exact component = {Welcome} />
          <Route path='/LearningReact' exact component = {Welcome} />
          <Route path='/DeepDive' exact component = {Welcome} />

        </Switch>
      </Router>
    </>
  );
}

export default App;
