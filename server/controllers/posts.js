import Post from "../models/postModel.js";
import mongoose from "mongoose";

//controller for fetching all posts
export const getPosts = async (req, res) => {
    let posts;
    try {
        if (req.query.getUserInfo && req.query.getUserInfo == "true") {
            posts = await Post.aggregate([
                {
                    $match: {
                        deleted: {
                            $ne: true,
                        },
                    },
                },
                {
                    $lookup: {
                        from: "userschemas",
                        localField: "user",
                        foreignField: "_id",
                        as: "userInfo",
                    },
                },
            ]);
        } else {
            posts = await Post.find({
                deleted: {
                    $ne: true,
                },
            });
        }
        res.status(200).json(posts);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//controller for creating a new post
export const createPost = async (req, res) => {
    const post = req.body;
    const newPost = new Post(post);
    try {
        await newPost.save();
        res.status(200).json(newPost);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//controller for editing a post
export const editPost = async (req, res) => {
    try {
        const { id } = req.params;
        const { user, text, tags, ceatedAt, likes, image, comments } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No post with id: ${id}`);

        const updatedPost = {
            user,
            text,
            tags,
            ceatedAt,
            likes,
            image,
            comments,
            _id: id,
            editedAt: new Date().getTime(),
        };

        await Post.findByIdAndUpdate(id, updatedPost, { new: true });

        res.json(updatedPost);
    } catch (error) {
        console.log("error =", error);
        res.status(404).json({ error: error.message });
    }
};

//controller for deleting a post
export const deletePost = async (req, res) => {
    const { id } = req.params;
    try {
        const newPost = await Post.findByIdAndUpdate(
            id,
            {  deleted: true },
            { new: true }
        );
        res.status(200).json({ deleted: "true" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//controller for fetching a post by Id
export const getPostById = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await Post.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

//controller for liking a post
export const likePost = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No post with id: ${id}`);

        const updatedPost = await Post.findByIdAndUpdate(id, {$inc : {likes : 1}}, { new: true });

        res.json(updatedPost);
    } catch (error) {
        console.log("error =", error);
        res.status(404).json({ error: error.message });
    }
};
