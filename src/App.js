// Importing React
import React from 'react';
// Importing the HomePage
import HomePage from './components/mainPage/HomePage';
// Importing LayoutRoute
import LayoutRoute from './LayoutRoute';
import LayoutRoute2 from './LayoutRoute2';
// Importing Login page
import LoginPage from './components/registration/LoginPage';
// Importing Registration page
import SignupPage from './components/registration/SignupPage';
// Importing User Profile
import Profile from './components/userProfile/Profile';
// Importing Challenges
import ChallengePage from './components/challenges/ChallengePage';
// Importing css
import './App.css'
// Importing the react-router things needed
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Actual App function, has our code
function App() {
  return (

    <Router>
      <Switch>
        <LayoutRoute path="/" exact={true} component={HomePage} />
        <LayoutRoute2 path="/login" exact={true} component={LoginPage} />
        <LayoutRoute2 path="/register" exact={true} component={SignupPage} />
        <LayoutRoute2 path="/user" exact={true} component={Profile} />
        <LayoutRoute path='/challenges' exact={true} component={ChallengePage} />
      </Switch>
    </Router>

  );
}

export default App;
