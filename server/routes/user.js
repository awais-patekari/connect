import express from "express";

import { 
    createUser,
    userLogin,
    getUser,
    editUser
} from "../controllers/user.js";

const router = express.Router();

//Routes for users
router.post('/create', createUser);
router.post('/login', userLogin);
router.post('/:id', getUser);
router.patch('/:id', editUser);

export default router;