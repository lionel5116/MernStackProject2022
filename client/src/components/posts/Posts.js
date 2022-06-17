import React ,{Fragment,useEffect}from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPosts } from '../../actions/post';
import Spinner from '../layout/Spinner';
import PostItem from './PostItem';
import PostForm from './PostForm';

const Posts = ({getPosts,post: {posts,loading}}) => {
    useEffect(() => {
        getPosts()
    },[getPosts])
  return (
    loading ? <Spinner /> :
    <section className='container'>
     <Fragment>
        <h1 className='large text-primary'>
          Posts
        </h1>
        <p className='lead'>
          <i className='fas fa-user'></i>Welcome to the community
        </p>
        <PostForm />
        <div>
            {/*NOTICE HOW WE REFERENCE posts and not post from our array destructring */}
            {posts.map(post => (
               <PostItem key={post._id} post={post}/>
            ))}
        </div>
     </Fragment>
    </section>
  )
}

Posts.propTypes = {
    getPosts:PropTypes.func.isRequired,
    post: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    post: state.post,
})

export default connect(mapStateToProps,{getPosts})(Posts)