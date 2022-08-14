import React, { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import Home from "./components/Home";
import TopBar from "./components/TopBar/TopBar";
import Login from "./components/Login";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "./store/userSlice";

let theme = createTheme({
    status: {
        danger: "#e53e3e",
    },
    palette: {
        primary: {
            main: "#2176AE",
            darker: "#053e85",
        },
        secondary: {
            main: "rgb(165 208 228)",
            contrastText: "#fff",
        },
    },
});

const App = () => {
    const userData = useSelector((state) => state.user.user);
    const user = JSON.parse(localStorage.getItem("user"));
    const dispatch = useDispatch();

    useEffect(() => {
        if (Object.keys(userData).length == 0 && user?.userName) {
            dispatch(setUser(user));
        }
    }, [userData]);

    return (
        <ThemeProvider theme={theme}>
            {/* If a user has logged in, show home page. Otherwise show Login page */}
            {user?.userName ? (
                <div>
                    <TopBar />
                    <Home />
                </div>
            ) : (
                <Login />
            )}
        </ThemeProvider>
    );
};

export default App;
