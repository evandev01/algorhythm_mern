import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar/index';
import Search from './pages/Search';
import Playlist from './pages/Playlist';

// Redux
// import { Provider } from 'react-redux';
// import store from './store';

import './App.css';

const App = () => (
  // <Provider store={store}>
  <Router>
    <Fragment>
      <Navbar />
      <Route exact path='/' component={Search} />
      <Route exact path='/playlist' component={Playlist} />
    </Fragment>
  </Router>
  // </Provider>
);

export default App;
