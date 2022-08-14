import React from 'react';
import Comment from '../Comment';

//Displays all comments in a post
function PostComments({comments}) {
    return (
        <div>
            {
                comments && comments.length > 0 && comments.map((comment, i) => <Comment comment={comment} key={i} />)
            }
        </div>
    );
}

export default PostComments;