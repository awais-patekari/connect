import express from "express";

import { 
    getCommentBasedOnPostId,
    deleteComment,
    createComment
} from "../controllers/comment.js";

const router = express.Router();

//Routes for comments
router.post('/', createComment);
router.get('/:id', getCommentBasedOnPostId);
router.delete('/:id', deleteComment);

export default router;