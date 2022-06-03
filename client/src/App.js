import './App.css';
import React, {Fragment} from 'react'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

const App = () => (
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
          <Route path="/" element={<Landing />} />
    
            <Route path="/Login" element={<Login />} />
            <Route path="/Register" element={<Register />} />

        </Routes>
    </Fragment>
  </Router>
);
export default App;
