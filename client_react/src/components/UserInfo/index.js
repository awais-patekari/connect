import React from "react";
import { makeStyles } from "@mui/styles";
import LongMenu from "../PostMenu";
import UserMeta from "../UserMeta";
import { Typography } from "@mui/material";

const useStyles = makeStyles({
    base: {
        display: "flex",
        alignItems: "center",
        padding: 10,
        justifyContent: 'space-between'
    }
});

function UserInfo({ user, post }) {
    const classes = useStyles();
    return (
        <div className={classes.base}>
            <UserMeta user={user} post={post} showTime bold/>
            {/* <LongMenu post={post} /> */}
        </div>
    );
}

export default UserInfo;
