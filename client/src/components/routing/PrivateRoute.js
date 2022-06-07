import React from 'react'
import {Route, Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';

//component that is passed in from route (component) in app.js, pass the component along with it's props (...rest)
const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      !isAuthenticated ? (
        <Navigate to='/Login' />
      ) : (
        <Component {...props} />
      )
    }
  />
);

 
PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
});


export default connect(mapStateToProps)(PrivateRoute);

/*
import {Route, Navigate} from 'react-router-dom';
const ProtectedRoute = ({
    user,
    redirectPath = '/Login',
    children,
  }) => {
    if (!user) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return children;
  };

  export default ProtectedRoute
  */