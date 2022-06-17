import React,{useState} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addComment, deletComment } from '../../actions/post'

const CommentForm = ({addComment,deletComment,postId}) => {
    const [text,setText] = useState('');

  return (
    <section className='container'>
      <div className='post-form'>
        <div className='bg-primary p'>
          <h3>Leave a Comment</h3>
        </div>
        <form
          className='form my-1'
          onSubmit={(e) => {
            e.preventDefault();
            addComment(postId,{ text });
            setText('');
          }}
        >
          <textarea
            name='text'
            cols='30'
            rows='5'
            placeholder='Create a Commnent'
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          ></textarea>
          <input type='submit' className='btn btn-dark my-1' value='Submit' />
        </form>
      </div>
    </section>
  )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

const mapStateToProps = state => ( {

})

export default connect(mapStateToProps,{addComment,deletComment})(CommentForm)