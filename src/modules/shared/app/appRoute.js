import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import Auth from '../../../services/Auth';
import AuthProvider from './AuthProvider';

const AppRoute = (props) => {
  const { component: Component, ...rest } = props;
  return (
    <Route
      {...rest}
      render={(routeProps) => {
        if (!Auth.hasAuthInStorage()) {
          return <Redirect to="/login" />;
        }
        return (
          <AuthProvider>
            <Component {...routeProps} />
          </AuthProvider>
        );
      }}
    />
  );
};

AppRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

export default AppRoute;
