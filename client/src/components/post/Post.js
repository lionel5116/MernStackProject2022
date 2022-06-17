import React, {Fragment,useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import { getPost } from '../../actions/post';
import Spinner from '../layout/Spinner';
import { useParams } from "react-router-dom";
import PostItem from '../posts/PostItem';
import { Link } from 'react-router-dom';
import CommentForm from './CommentForm';
import CommentItem from './CommentItem';

const Post = ({getPost,post: {post,loading}}) => {
    let {id} =  useParams();

  useEffect(( )=> {
    getPost(id);
  },[getPost,id])

  return (
    loading || post === null ? <Spinner /> : <Fragment>
       <section className='container'>
        <Link to='/posts' className='btn'>
            Back to Posts
        </Link>
        <PostItem post={post} showActions={false}/>
        <CommentForm postId={post._id}/>
          
        <div className='comments'>
          {post.comments.map(comment => (
            <CommentItem key={comment._id} comment={comment} postId={post._id}/>
          ))}
        </div>
         
        </section>
    </Fragment>
  )
}

Post.propTypes = {
    getPost:PropTypes.func.isRequired,
   post: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post
})

export default connect(mapStateToProps,{getPost})(Post)