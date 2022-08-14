import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import { makeStyles } from "@mui/styles";
import {
    useAddPostMutation,
    useEditPostMutation,
    useGetPostQuery,
} from "../../services/posts";
import { setPostData, toggle } from "../../store/togglePopupSlice";

const useStyles = makeStyles((theme) => ({
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(2),
    },
    form: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
    fileInput: {
        width: "97%",
        margin: "10px 0",
    },
    buttonSubmit: {
        padding: "5px 15px; background:#ccc", 
        border:"0 none",
        cursor: "pointer",
        "-webkit-border-radius" : 5,
        borderRadius: 5
    },
}));

//Form for creating/editing posts
const Form = (props) => {
    const [postData, setPostData] = useState({
        message: "",
        tags: "",
        selectedFile: "",
    });
    const dispatch = useDispatch();
    const classes = useStyles(props);
    const [addPost] = useAddPostMutation();
    const [editPost] = useEditPostMutation();
    const postEditData = useSelector((state) => state.togglePopup.postData);
    const user = JSON.parse(localStorage.getItem("user"));

    useEffect(() => {
        if (postEditData && Object.keys(postEditData).length !== 0) {
            setPostData({
                message: postEditData.text,
                tags: postEditData.tags.join(","),
                selectedFile: postEditData.image,
            });
        }
    }, [postEditData]);

    const clear = () => {
        setPostData({ message: "", tags: "", selectedFile: "" });
    };

    const handleSubmit = (e) => {
        if (postEditData && Object.keys(postEditData).length !== 0) {
            editPost({
                ...postEditData,
                text: postData.message,
                image: postData.selectedFile,
                tags: postData.tags ? postData.tags.split(",") : [],
                user: user._id,
            });
            dispatch(setPostData({}));
        } else {
            addPost({
                text: postData.message,
                image: postData.selectedFile,
                tags: postData.tags ? postData.tags.split(",") : [],
                user: user._id,
            });
        }
        dispatch(toggle());
        setPostData({ message: "", tags: "", selectedFile: "" });
    };

    return (
        <Paper elevation={0} className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">Create new post</Typography>
                <TextField
                    name="message"
                    variant="outlined"
                    label="Message"
                    fullWidth
                    multiline
                    rows={4}
                    value={postData.message}
                    onChange={(e) =>
                        setPostData({ ...postData, message: e.target.value })
                    }
                />
                <TextField
                    name="tags"
                    variant="outlined"
                    label="Tags (coma separated)"
                    fullWidth
                    value={postData.tags}
                    onChange={(e) =>
                        setPostData({
                            ...postData,
                            tags: e.target.value,
                        })
                    }
                />
                {
                    postData.selectedFile && 
                    <img src={postData.selectedFile} height="200px" />
                }
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        className={classes.buttonSubmit}
                        onDone={({ base64 }) =>
                            setPostData({ ...postData, selectedFile: base64 })
                        }
                    />
                </div>
                {/* <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                    fullWidth
                >
                    
                </Button> */}
                <>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    <Button variant="text" onClick={clear}>
                        Clear
                    </Button>
                </>
                {/* <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={clear}
                    fullWidth
                >
                    Clear
                </Button> */}
            </form>
        </Paper>
    );
};

export default Form;
