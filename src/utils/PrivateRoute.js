import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const user = useSelector((state) => state.user);

  return <Route {...rest} render={(props) => (user.data ? <Component {...props} /> : <Redirect to='/' />)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.oneOf(PropTypes.any).isRequired,
};

export default PrivateRoute;
