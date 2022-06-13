import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import Moment from 'react-moment';
import { getCurrentUserProfile } from '../../actions/profile';
import { deleteExperience } from '../../actions/profile';

////make sure that you include your action(s) within the curly braces or you will get a .. is not a function error
const Experience = ({getCurrentUserProfile,deleteExperience,profile:{profile}}) => {
    
    useEffect (() => {
        getCurrentUserProfile();
     },[]);
    const experiences = profile.experience.map(exp => (
       <tr key={exp._id}>
        <td>{exp.company}</td>
        <td className='hide-sm'>{exp.title}</td>
        <td>
            <Moment format='YYYY/MM/DD'>{exp.from}</Moment> - {
                exp.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{exp.to}</Moment>)
            }
        </td>
        <td><button onClick={() =>deleteExperience(exp._id)} 
                    className='btn btn-danger'>Delete</button></td>
       </tr>
    ));
  return (
    <div>
     <Fragment>
        <h2 className='my-2'>Experience Credentials</h2>
        <table className='table'>
           <thead>
            <tr>
            <th>Company</th>
             <th>Title</th>
             <th >Years</th>
             <th />
            </tr>
           </thead>
           <tbody>
            {experiences}
           </tbody>
        </table>
     </Fragment>
    </div>
  )
}

Experience.propTypes = {
    profile:PropTypes.object.isRequired,
    deleteExperience: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile
  });

export default connect(mapStateToProps,{getCurrentUserProfile,deleteExperience})(Experience);