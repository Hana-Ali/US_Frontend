// Importing React
import React from 'react';
// Importing the HomePage
import HomePage from './components/mainPage/HomePage';
// Importing LayoutRoute
import LayoutRoute from './LayoutRoute';
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
      </Switch>
    </Router>

  );
}

export default App;
