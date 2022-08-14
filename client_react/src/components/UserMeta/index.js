import React from "react";
import { makeStyles } from "@mui/styles";
import { Avatar, Typography, Tooltip } from "@mui/material";
import { stringAvatar } from '../../Utils/Utils';
import moment from "moment";


const useStyles = makeStyles({
    base: {
        display: "flex",
        alignItems: "center"
    },
});

//Displays User Information with an Avatar
function UserMeta({ user, small, showTime, post, bold }) {
    const classes = useStyles();
    // console.log("post =",post);
    const timeDiff = moment(post?.createdAt).fromNow();
    return (
        <div className={classes.base}>
            <Tooltip title={user.userName} placement="left">
                {
                    user.displayPicture ? 
                    <Avatar src={user.displayPicture} /> :
                    <Avatar {...stringAvatar(user.userName, small)} />
                }
            </Tooltip>
            <Typography
                style={{ margin: 10, fontSize: small ? "small" : "initial", fontWeight: bold ? "bold" : "initial" }}
            >
                {user.userName}
            </Typography>
            {
                showTime && 
                <Typography style={{color:"#ababab"}}>{timeDiff}</Typography>
            }
        </div>
    );
}

export default UserMeta;
