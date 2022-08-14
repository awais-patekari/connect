import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { setPostData, toggle } from "../../store/togglePopupSlice";
import { useDispatch, useSelector } from "react-redux";
import { useDeletePostMutation } from "../../services/posts";

const options = ["Edit", "Delete"];

//allows user to edit/delete post
export default function LongMenu({ post }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch();
    const [deletePost] = useDeletePostMutation();
    const userData = useSelector((state) => state.user.user)
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (option) => {
        setAnchorEl(null);
        switch (option) {
            case "Edit":
                if(post.user === userData._id) {
                    dispatch(setPostData(post));
                    dispatch(toggle());
                }
                break;
            case "Delete":
                if(post.user === userData._id) {
                    deletePost({id: post._id})
                }
                break;
            default:
                break;
        }
    };

    return (
        <div>
            <IconButton
                aria-label="more"
                id="long-button"
                aria-controls={open ? "long-menu" : undefined}
                aria-expanded={open ? "true" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    "aria-labelledby": "long-button",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={() => handleClose()}
                PaperProps={{
                    style: {
                        width: "20ch",
                    },
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        selected={option === "Pyxis"}
                        onClick={() => handleClose(option)}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
}
