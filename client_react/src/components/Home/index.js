import React from "react";
import { makeStyles } from "@mui/styles";

import {
    Container,
    Backdrop,
    Fade,
    Box,
    Modal,
    Fab,
    Tooltip,
} from "@mui/material";

import Posts from "../Posts";
import { useSelector, useDispatch } from "react-redux";
import Form from "../Form/Form";
import { toggle, toggleUserSettings } from "../../store/togglePopupSlice";
import UserSettings from "../UserSettings";
import AddIcon from "@mui/icons-material/Add";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    //border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const useStyles = makeStyles((theme) => ({
    fab: {
        position: "fixed",
        top: 0,
    },
}));

//Home page
const Home = () => {
    const classes = useStyles();
    const enablePopup = useSelector((state) => state.togglePopup.value);
    const enableUserSettings = useSelector(
        (state) => state.togglePopup.enableUserSettings
    );
    const dispatch = useDispatch();
    return (
        <Container style={{ marginTop: 70 }}>
            <Tooltip title="New Post">
                <Fab
                    color="primary"
                    aria-label="add"
                    style={{ position: "fixed", bottom: 10, right: 250 }}
                    onClick={() => dispatch(toggle())}
                >
                    <AddIcon />
                </Fab>
            </Tooltip>
            <Posts />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={enablePopup}
                onClose={() => dispatch(toggle())}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={enablePopup}>
                    <Box sx={style}>
                        <Form />
                    </Box>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={enableUserSettings}
                onClose={() => dispatch(toggleUserSettings())}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={enableUserSettings}>
                    <Box sx={style}>
                        <UserSettings />
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default Home;
