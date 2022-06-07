

import {Navigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {connect } from 'react-redux';


  const ProtectedRoute = ({
    component: Component,
    auth: { isAuthenticated, loading },
    redirectPath = '/Login',
    children,
   ...rest
  }) => {
    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
  
    return  children
  };


   
  ProtectedRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth
  });
  

export default connect(mapStateToProps)(ProtectedRoute);

