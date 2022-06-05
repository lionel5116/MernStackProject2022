import './App.css';
import React, {Fragment,useEffect} from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';


//Redux
import {Provider} from 'react-redux';
import store from './store';

import setAuthToken from './utils/SetAuthToken';
import { loadUser } from './actions/auth';

if(localStorage.token) {
  setAuthToken(localStorage.token)
}

const App = () =>  {
   useEffect(() => {
    store.dispatch(loadUser());
   },[]);

  return (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <section className='container'>
          <Alert />
        </section>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/Login' element={<Login />} />
          <Route path='/Register' element={<Register />} />
        </Routes>
      </Fragment>
    </Router>
  </Provider>
)};
export default App;
