import React, {Fragment} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { deletComment } from '../../actions/post';
import { Link } from 'react-router-dom';
import { Moment } from 'react-moment';

const CommentItem = ({deletComment,
 postId,
 comment: {_id,text,name,avatar,user,date},
 auth
}) => {
  return (
    <section className='container'>
      <div className="post bg-white p-1 my-1">
          <div>
            <Link to={`/profile/${user}`}>
              <img
                class="round-img"
                src={avatar}
                alt=""
              />
              <h4>{name}</h4>
            </Link>
          </div>
          <div>
            <p className="my-1">
                {text}
            </p>
             <p className="post-date">
              Posted on <Moment format='YYYY/MM/DD'>{date}</Moment>
            </p>
          </div>
          </div>
    </section>
  )
}

CommentItem.propTypes = {
    deletComment:PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    postId: PropTypes.number.isRequired,
    comment: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{deletComment})(CommentItem)