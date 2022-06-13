import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import Moment from 'react-moment';
import { getCurrentUserProfile } from '../../actions/profile';
import { deleteEducation } from '../../actions/profile';

//make sure that you include your action(s) within the curly braces or you will get a .. is not a function error
const Education = ({getCurrentUserProfile,profile:{profile},deleteEducation}) => {
    
    useEffect (() => {
        getCurrentUserProfile();
     },[]);
    const educations = profile.education.map(edu => (
       <tr key={edu._id}>
        <td>{edu.school}</td>
        <td className='hide-sm'>{edu.degree}</td>
        <td>
            <Moment format='YYYY/MM/DD'>{edu.from}</Moment> - {
                edu.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{edu.to}</Moment>)
            }
        </td>
        <td><button 
          onClick={() => deleteEducation(edu._id)}
          className='btn btn-danger'>Delete</button></td>
       </tr>
    ));
  return (
    <div>
     <Fragment>
        <h2 className='my-2'>Education Credentials</h2>
        <table className='table'>
           <thead>
            <tr>
            <th>School</th>
             <th>Degree</th>
             <th >Years</th>
             <th />
            </tr>
           </thead>
           <tbody>
            {educations}
           </tbody>
        </table>
     </Fragment>
    </div>
  )
}

Education.propTypes = {
    profile:PropTypes.object.isRequired,
    deleteEducation:PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
  });

export default connect(mapStateToProps,{getCurrentUserProfile,deleteEducation})(Education);