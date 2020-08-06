import React from 'react';
import './commentform.scss';

const CommentForm = (props) =>{
    return (
        <div className='comments' onSubmit={props.submitHandler}>
            <h3 className="comments__title">{props.description.comments.length} Comments</h3>
            <form className="comments__form">
                <img src='/Images/Mohan-muruge.jpg' name='maya' className='comments__username' alt="Username Icon" />
                <div className="comments__compartment">
                    <label className="comments__conversation">Join the conversation
                        <input className="comments__text" name="default" placeholder="Write comment here.." />
                    </label>
                    <button type="submit" className="comments__button">Comment</button>
                </div>
            </form>
        </div>
    )
}

export default CommentForm;