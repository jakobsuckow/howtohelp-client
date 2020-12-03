import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../home/home';
import Playground from '../../playground/playground';
import LocationTracker from '../../../analytics/locationTracker';
import FormStepper from '../../add-help/formStepper';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route
        path="/"
        exact
        render={() => {
          return (
            <>
              <Home />
              <LocationTracker />
            </>
          );
        }}
      />
      <Route path="/playground" exact component={Playground} />
      <Route path="/form" exact component={FormStepper} />

      <Redirect to="/" />
    </Switch>
  </Router>
);

export default AppRouter;
