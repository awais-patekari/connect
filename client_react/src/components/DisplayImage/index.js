import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(theme => ({
    base: {
        display: 'flex',
        // justifyContent: 'space-around',
        paddingLeft: 20
    },
    image: {
        maxWidth: '65%',
        borderRadius: 8,
        border: "2px solid #ddd",
        borderRadius: 4,
        padding: 5,
    }
}));

//Displays image
const DisplayImage = ({image}) => {
    const classes = useStyles();
    return (
        <div className={classes.base}>
            <img src={image} className={classes.image}/>
        </div>
    )
};

export default DisplayImage;