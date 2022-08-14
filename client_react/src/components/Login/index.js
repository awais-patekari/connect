import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { useLoginMutation, useCreateUserMutation } from "../../services/user";
import { setUser } from "../../store/userSlice";
import { useDispatch } from "react-redux";
import {
    Paper,
    TextField,
    Button,
    FormControlLabel,
    Checkbox,
} from "@mui/material";
import logo from '../../logos/color_logo.png';

const useStyles = makeStyles((theme) => ({
    loginWrapper: {},
    root: {
        "& .MuiTextField-root": {
            margin: theme.spacing(1),
        },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
    image: {
        maxHeight: 100
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center'
    }
}));

//Login page with login form
export default function Login(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();
    const [email, setEmail] = useState();
    const [checked, setChecked] = useState(false);
    const [login] = useLoginMutation();
    const [create] = useCreateUserMutation();

    const handleSubmit = async (e) => {

        const handleUserData = (user) => {
            if (user && Object.keys(user).length > 0) {
                dispatch(setUser(user));
                localStorage.setItem("user", JSON.stringify(user));
                window.location.reload(false);
            }
        }

        e.preventDefault();
        if(!checked) {
            const res = await login({
                userName: username,
                password: password,
            });
    
            const { user } = res.data;
    
            handleUserData(user);        
        }
        else {
            const user = await create({
                userName: username,
                password: password,
                email: email
            });
            // console.log("user =",user);
            handleUserData(user.data);
        }
    };

    const handleChecked = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <Paper elevation={0} className={classes.paper}>
            <div className={classes.imageWrapper}>
                <img src={logo} className={classes.image}/>
            </div>
            <form
                autoComplete="off"
                noValidate
                className={`${classes.root} ${classes.form}`}
                onSubmit={handleSubmit}
            >
                <TextField
                    name="username"
                    variant="outlined"
                    label="Username"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                />
                <TextField
                    id="filled-password-input"
                    type="password"
                    name="password"
                    variant="outlined"
                    label="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {checked ? (
                    <TextField
                        name="email"
                        variant="outlined"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                ) : (
                    <></>
                )}
                <FormControlLabel
                    control={
                        <Checkbox checked={checked} onChange={handleChecked} />
                    }
                    label="Click to create new acount"
                />
                <Button
                    className={classes.buttonSubmit}
                    variant="contained"
                    color="primary"
                    size="large"
                    type="submit"
                >
                    {checked ? "Signup" : "Login"}
                </Button>
            </form>
        </Paper>
    );
}
