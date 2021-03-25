import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import Home from './Home';
import Navbar from './Navbar';
import Quote from './Quote';
import '../Routes.css';

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
