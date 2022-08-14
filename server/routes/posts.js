import express from "express";

import { 
    getPosts, 
    createPost,
    editPost,
    deletePost,
    getPostById,
    likePost
} from "../controllers/posts.js";

const router = express.Router();

//Routes for Posts
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', editPost);
router.delete('/:id', deletePost);
router.get('/:id', getPostById);
router.post('/:id/like', likePost);

export default router;