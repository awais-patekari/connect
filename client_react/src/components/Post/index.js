import React from "react";

import { Paper, Skeleton, Typography, Divider } from '@mui/material';
import { makeStyles } from '@mui/styles';
import UserInfo from "../UserInfo";
import PostContent from '../PostContent';
import { useGetCommentsQuery } from "../../services/comment";
import CommentSection from "../CommentSection";
import PostOptions from "../PostOptions";



const useStyles = makeStyles(theme => ({
    root: {
        margin: 10,
        padding: 10
    }
}));

//Displays a Post
const Post = ({post}) => {
    const classes = useStyles();
    const { data, error, isLoading, isSuccess, isError } = useGetCommentsQuery({ getUserInfo : true, postId: post._id});
    return(
        <Paper className={classes.root} elevation={12}>
            <UserInfo user={post.userInfo[0]} post={post}/>
            <PostContent post={post} />
            <PostOptions post={post}/>
            <Divider style={{margin: 10}}/>
            <CommentSection data={data} post={post}/>
        </Paper>
    )
}

export default Post;