import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import './App.css';
import NavBar from './NavBar/NavBar';
import Welcome from './components/Welcome';
import Intro from './components/Intro';
import IntroAlgorithms from './components/IntroAlgorithms';
import IntroAlgorithmsCont from './components/IntroAlgorithmsCont';
import IntroAlgorithmsComplex from './components/IntroAlgorithmsComplex';
import LearningReact from './components/LearningReact';
import DeepDive from './components/TakingADeeperDive';


function App() {
  return (
    <>
      <Router>
        <NavBar/>
        <Switch>

          <Route path='/' exact component = {Welcome} />
          <Route path='/Intro' exact component = {Intro} />
          <Route path='/IntroAlgorithms' exact component = {IntroAlgorithms} />
          <Route path='/IntroAlgorithmsCont' exact component = {IntroAlgorithmsCont} />
          <Route path='/IntroAlgorithmsComplex' exact component = {IntroAlgorithmsComplex} />
          <Route path='/LearningReact' exact component = {LearningReact} />
          <Route path='/DeepDive' exact component = {DeepDive} />

        </Switch>
      </Router>
    </>
  );
}


export default App;
