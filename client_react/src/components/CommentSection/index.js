import React from 'react';
import NewComment from '../NewComment';
import PostComments from '../PostComments';
import { Paper, Skeleton, Typography, Divider } from '@mui/material';
import { useSelector } from 'react-redux';

//Diaplays comments and option to ad new comment
const CommentSection = ({data, post}) => {
    const showCommentsArray = useSelector(state => state.togglePopup.showComments);
    const showComments = showCommentsArray.indexOf(post._id);
    return (
        <div>
            <Typography style={{marginLeft: 20}}>Comments...</Typography>
            {
                showComments !== -1 && 
                <>
                    {
                        data ? <PostComments comments={data}/> : <Skeleton variant="text" />
                    }
                    <NewComment post_id={post._id}/>
                </>
            }
        </div>
    );
};

export default CommentSection;