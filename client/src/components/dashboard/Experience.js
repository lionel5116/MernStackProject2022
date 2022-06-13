import React,{Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import {connect } from 'react-redux';
import Moment from 'react-moment';
import { getCurrentUserProfile } from '../../actions/profile';

const Experience = ({getCurrentUserProfile,
    profile:{profile}}) => {
    
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
        <td><button className='btn btn-danger'>Delete</button></td>
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
}

const mapStateToProps = state => ({
    profile: state.profile
  });

export default connect(mapStateToProps,{getCurrentUserProfile})(Experience);