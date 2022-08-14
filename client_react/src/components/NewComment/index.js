import React, { useEffect, useState } from "react";
import UserMeta from "../UserMeta";
import { makeStyles } from "@mui/styles";
import { TextField, Button } from "@mui/material";
import { useAddCommentMutation } from '../../services/comment';

const useStyles = makeStyles({
    base: {
        display: "flex",
        alignItems: "center",
        padding: 10,
    },
});

const userInfo = {
    userName: "bottas_101",
};

//Input field for user to add new post
function NewComment({post_id}) {
    const classes = useStyles();
    const [value, setValue] = useState("");
    const [addComment] = useAddCommentMutation();
    const user = JSON.parse(localStorage.getItem("user"));

    const handleChange = (event) => {
        setValue(event.target.value);
    }
    const handleClick = () => {
        if(value !== "") {
            addComment({user: user._id, post: post_id, comment: value});
            setValue("")
        }
    };


    return (
        <div className={classes.base}>
            <UserMeta user={user} small={true} />
            <TextField
                id="outlined-basic"
                label="add comment"
                variant="outlined"
                size="small"
                value={value}
                onChange={handleChange}
                style={{ flexGrow: 1 }}
            />
            <Button variant="text" onClick={handleClick}>
                Add
            </Button>
        </div>
    );
}

export default NewComment;
