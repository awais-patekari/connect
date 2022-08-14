import React from "react";
import logo from '../../logos/black_logo.png';
import {
    Button,
    AppBar,
    Toolbar,
    Typography,
    Avatar,
    Menu,
    MenuItem,
    Tooltip,
    IconButton,
    ListItemIcon,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useSelector, useDispatch } from "react-redux";
import { toggle, toggleUserSettings } from "../../store/togglePopupSlice";
import Logout from "@mui/icons-material/Logout";
import { stringAvatar } from '../../Utils/Utils';
import SettingsIcon from '@mui/icons-material/Settings';

const useStyles = makeStyles((theme) => ({
    topBar: {
       zIndex: 1000
    },
    base: {
        backgroundColor: "#2176AE",
    },
    image: {
        maxHeight: 25,
    },
    imageWrapper: {
        flexGrow: 1
    }
}));

//Topbar to display app logo, logged in user and access user settings
const TopBar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    // const user = useSelector((state) => state.user.user)
    const user = JSON.parse(localStorage.getItem("user"));
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload(false);
    };

    const handleAccountSettings = () => {
        dispatch(toggleUserSettings());
    };

    return (
        <div className={classes.topBar}>
            <AppBar position="fixed" color='secondary'>
                <Toolbar variant="dense">
                    <div className={classes.imageWrapper}>
                        <img src={logo} className={classes.image}/>
                    </div>
                    {/* <Typography
                        variant="h6"
                        color="inherit"
                        component="div"
                        flexGrow={1}
                    >
                        Connect
                    </Typography> */}
                    {/* <Button color="inherit" onClick={() => dispatch(toggle())}>
                        New Post
                    </Button> */}
                    <Tooltip title="Account settings">
                        <IconButton
                            onClick={handleClick}
                            size="small"
                            sx={{ ml: 2 }}
                            aria-controls={open ? "account-menu" : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? "true" : undefined}
                        >
                            {
                                user.displayPicture ? 
                                <Avatar sx={{ width: 32, height: 32 }} src={user.displayPicture} /> :
                                <Avatar sx={{ width: 32, height: 32 }} {...stringAvatar(user?.userName[0])} />
                            }
                            {/* <Avatar sx={{ width: 32, height: 32 }} {...stringAvatar(user?.userName[0])} /> */}
                        </IconButton>
                    </Tooltip>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <MenuItem onClick={handleAccountSettings}>
                            <ListItemIcon>
                                <SettingsIcon fontSize="small" />
                            </ListItemIcon>
                            Account Settings
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Logout
                        </MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default TopBar;
