import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import { TextField, Button, Typography, Paper } from "@mui/material";
import FileBase from "react-file-base64";
import { useEditUserMutation, useGetUserQuery } from "../../services/user";
import { toggleUserSettings } from "../../store/togglePopupSlice";


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
        marginBottom: 10,
    },
}));

function UserSettings(props) {
    const classes = useStyles(props);

    const dispatch = useDispatch();

    const [editUser] = useEditUserMutation();

    const user = useSelector((state) => state.user.user)
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData(user);
    },[user]);

    const clear = () => {
        setUserData({ displayPicture: "" });
    };

    const handleSubmit = async (e) => {
        // console.log("userData =",userData)
        editUser({...user, ...userData});
        //dispatch(setPostData({}));
        // const { data, error, isLoading, isSuccess, isError } = await useGetUserQuery({id: user._id});
        // console.log("data =",data);
        // dispatch(setUser(data));
        dispatch(toggleUserSettings());
        setUserData({ userName: "", displayPicture: "" });
    };

    return (
        <Paper elevation={0} className={classes.paper}>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <Typography variant="h6">User Settings</Typography>
                <TextField
                    name="userName"
                    variant="outlined"
                    label="User Name"
                    fullWidth
                    value={userData.userName}
                    onChange={(e) =>
                        setUserData({ ...userData, userName: e.target.value })
                    }
                />
                {
                    userData.displayPicture && 
                    <img src={userData.displayPicture} height="200px" />
                }
                <div className={classes.fileInput}>
                    <FileBase
                        type="file"
                        multiple={false}
                        onDone={({ base64 }) =>
                            setUserData({ ...userData, displayPicture: base64 })
                        }
                    />
                </div>
                <>
                    <Button variant="contained" onClick={handleSubmit}>Submit</Button>
                    <Button variant="text" onClick={clear}>
                        Delete Image
                    </Button>
                </>
            </form>
        </Paper>
    );
}

export default UserSettings;