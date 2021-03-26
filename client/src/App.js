import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar/index';
import Search from './pages/Search';

import './App.css';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Search} />
    </Fragment>
  </Router>
);

export default App;
