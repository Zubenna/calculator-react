import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Quote from './components/Quote';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/app" component={App} exact />
      <Route path="/quote" component={Quote} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
