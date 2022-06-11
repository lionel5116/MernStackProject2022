import axios from "axios";
import { setAlert } from "./alert";


import { GET_PROFILE,
         PROFILE_ERROR,
        UPDATE_PROFILE} from "./types";



//Get current users profile
export const getCurrentUserProfile = () => async dispatch => {
    try {
        const res = await axios.get('/api/profile/me');
        dispatch( {
          type: GET_PROFILE,
          payload: res.data
        });

    }
    catch (err) {
      dispatch( {
        type: PROFILE_ERROR,
        payload: {msg:err.response.statusText,status:err.response.status}
      });
    }
}

//Create or Update a profile
//the dispatch used in the try/catches are defined with the dispatch in the funtion signature
export const createProfile = (formData,edit = false) => async dispatch => {
  console.log(formData);
  try {
    const config = {
      headers: {
          'Content-Type':'application/json'
      }}

     const res = await axios.post('/api/profile',formData,config);
     dispatch( {
      type: GET_PROFILE,
      payload: res.data
    });

    dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created','success'));

    
    if(!edit) {
    
    }
    
    
  } catch (err) {

    console.log(err);
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg,'danger')));  
    }

    dispatch( {
      type: PROFILE_ERROR,
      payload: {msg:err.response.statusText,status:err.response.status}
    });
  }
}

//Add Experience
export const addExperience = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
          'Content-Type':'application/json'
      }}

     const res = await axios.put('/api/profile/experience',formData,config);
     dispatch( {
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Experience Added..','success'));

  } catch (err) {

    console.log(err);
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg,'danger')));  
    }

    dispatch( {
      type: PROFILE_ERROR,
      payload: {msg:err.response.statusText,status:err.response.status}
    });
  }
}

//Add Experience
export const addEducation = (formData) => async dispatch => {
  try {
    const config = {
      headers: {
          'Content-Type':'application/json'
      }}

     const res = await axios.put('/api/profile/education',formData,config);
     dispatch( {
      type: UPDATE_PROFILE,
      payload: res.data
    });

    dispatch(setAlert('Education Added..','success'));

  } catch (err) {

    console.log(err);
    const errors = err.response.data.errors;
    if(errors) {
      errors.forEach(error => dispatch(setAlert(error.msg,'danger')));  
    }

    dispatch( {
      type: PROFILE_ERROR,
      payload: {msg:err.response.statusText,status:err.response.status}
    });
  }
}