import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import DisplayImage from "../DisplayImage";

const useStyles = makeStyles((theme) => ({
    root: {
        margin: 10,
    },
    text: {
        padding: 20,
        paddingRight: 5
    },
    tags: {
        display: "flex",
        paddingLeft: 5,
    },
    postText: {
        display: "flex",
        alignItems: "center",
        
    }
}));

function PostContent({ post }) {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.postText}>
                <Typography
                    className={classes.text}
                >
                    {post.text}
                </Typography>
                {post?.tags.length > 0 ? (
                    <div className={classes.tags}>
                        {post.tags.map((tag, i) => (
                            <Typography
                                style={{ 
                                    paddingRight: 5, 
                                    fontFamily: "Monospace", 
                                    color: "rgb(34 117 173)" 
                                }}
                            >
                                #{tag}
                            </Typography>
                        ))}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {post.image && <DisplayImage image={post.image} post={post}/>}
        </div>
    );
}

export default PostContent;
