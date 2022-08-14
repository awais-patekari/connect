import React from "react";
import { makeStyles } from "@mui/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import { IconButton, Badge } from "@mui/material";
import { useLikePostMutation, useDeletePostMutation } from '../../services/posts';
import { useDispatch, useSelector } from "react-redux";
import { setPostData, toggle, toggleComments } from "../../store/togglePopupSlice";

const useStyles = makeStyles((theme) => ({
    postOptions: {
        margin: 20,
        display: "flex",
        // justifyContent: "center",
    },
}));

//allows user to edit/delete post
function PostOptions({post}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [deletePost] = useDeletePostMutation();
    const [likePost] = useLikePostMutation()

    const userData = useSelector((state) => state.user.user)

    const handleEdit = () => {
        if(post.user === userData._id) {
            dispatch(setPostData(post));
            dispatch(toggle());
        }
    };

    const handleDelete = () => {
        if(post.user === userData._id) {
            deletePost({id: post._id})
        }
    };

    const handleComments = () => {
        dispatch(toggleComments(post._id));
    };

    return (
        <div className={classes.postOptions}>
            <IconButton onClick={() => likePost({id: post._id})}>
            <Badge badgeContent={post.likes} color="primary">
                <FavoriteBorderIcon color="primary" />
            </Badge>
            </IconButton>
            <IconButton>
                <ChatBubbleOutlineRoundedIcon color="primary" onClick={handleComments}/>
            </IconButton>
            {
                post.user === userData._id && 
                <>
                    <IconButton onClick={handleEdit} disabled={post.user === userData._id ? false: true}>
                        <EditIcon color="primary" />
                    </IconButton>
                    <IconButton onClick={handleDelete} disabled={post.user === userData._id ? false: true}>
                        <DeleteIcon color="primary" />
                    </IconButton>
                </>
            }
        </div>
    );
}

export default PostOptions;
