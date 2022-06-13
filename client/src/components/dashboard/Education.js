import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import Moment from 'react-moment';
import { getCurrentUserProfile } from '../../actions/profile';

const Education = ({getCurrentUserProfile,
    profile:{profile}}) => {
    
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
        <td><button className='btn btn-danger'>Delete</button></td>
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
}

const mapStateToProps = state => ({
    profile: state.profile
  });

export default connect(mapStateToProps,{getCurrentUserProfile})(Education);