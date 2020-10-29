import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../home/home';
import Playground from '../../playground/playground';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/playground" exact component={Playground} />
      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
