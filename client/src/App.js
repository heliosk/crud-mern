import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeScreen from './screens/Home';

import './App.scss';

const App = () => {
  return (
    <Router>
      <Route path='/' exact component={HomeScreen} />
    </Router>
  );
};

export default App;
