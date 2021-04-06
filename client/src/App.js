import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar/index';
import Search from './components/search/Search';
import Playlist from './components/playlist/Playlist';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />

        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/playlist' component={Playlist} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
