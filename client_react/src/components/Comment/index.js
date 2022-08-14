import { Paper, Typography } from '@mui/material';
import React from 'react';
import UserMeta from '../UserMeta';
import { makeStyles } from '@mui/styles';
import moment from "moment";

const useStyles = makeStyles({
    base: {
        display: 'flex',
        alignItems: 'center',
        padding: 10
    }
 });

 //Displays a comment
function Comment({comment}) {
    const classes = useStyles()
    const timeDiff = moment(comment?.createdAt).fromNow();
    return (
        <Paper className={classes.base} elevation={0}>
            <UserMeta user={comment.userInfo[0]} small bold/>
            <Typography style={{ fontSize: 'small'}}>{comment.comment}</Typography>
            <Typography style={{color:"#ababab", float: 'right', marginLeft: 10, fontSize: 'small'}}>{timeDiff}</Typography>
        </Paper>
    );
}

export default Comment;