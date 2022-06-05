import React , {Fragment,useState} from 'react'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';


const Login = ({setAlert,register}) => {
  const[formData,setFormData] = useState( {
      email:'',
      password:''
  });

const {email,password} = formData;

const onChange = e => setFormData({...formData,[e.target.name]:e.target.value});

const onSubmit = async e => {
    e.preventDefault();
   console.log('SUCCESS')
}

  return (
    <Fragment>
      <section className='container'>
        <h1 className='large text-primary'>Sign In</h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Sign Into Your Account
        </p>
        <form className='form' onSubmit={e => onSubmit(e)}>
         
          <div className='form-group'>
            <input
              type='email'
              placeholder='Email Address'
              name='email'
              required
              value={email}
              onChange={(e) => onChange(e)}
            />
          
          </div>
          <div className='form-group'>
            <input
              type='password'
              placeholder='Password'
              name='password'
              minLength='6'
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
        
          <input type='submit' className='btn btn-primary' value='Login' />
        </form>
        <p className='my-1'>
             Dont' have an account
           <Link to='/Register' className="btn btn-light">
            Sign Up
          </Link>
        </p>
      </section>
    </Fragment>
  );
}

Login.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
}

export default connect(null,{setAlert,register})(Login)