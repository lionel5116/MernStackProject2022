import React , {Fragment,useEffect} from 'react'
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getProfiles } from '../../actions/profile'; //when more than one function, use {} 
import ProfileItem from './ProfileItem';  //when only one function component, don't use {} - export default

//always REMEMBER TO PLACE YOUR ACTIONS IN {}
const Profiles = ({getProfiles,profile:{profiles,loading}}) => {
    
    useEffect(() => {
        getProfiles();
    },[getProfiles]);

  return <section className='container'>
  <Fragment>
        {loading ? <Spinner /> : 
         <Fragment>
          <h1 className='large text-primary'> Developers</h1>
          <p className='lead'>
            <i className='fab fa-connectdevelop'></i>
            Browse and connect with Developers
          </p>  
          <div className='profiles'>
           {profiles.length > 0 ? (
             profiles.map(profile => (
                <ProfileItem key={profile._id} profile={profile}/>
             ))
           ) : <h4>No Profiles found..</h4>}
          </div> 
         </Fragment> 
       }
    </Fragment>
    </section>
}

Profiles.propTypes = {
    getProfiles:PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  profile: state.profile
});

//always REMEMBER TO PLACE YOUR ACTION IN {}
export default connect(mapStateToProps,{getProfiles})(Profiles)