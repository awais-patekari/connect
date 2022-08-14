import Comment from "../models/commentModel.js";
import mongoose from "mongoose";

//controller for creating a new comment
export const createComment = async (req, res) => {
    const comment = req.body;
    try {
        const newComment = new Comment(comment);
        await newComment.save();
        res.status(200).json(newComment);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//controller for deleting a comment
export const deleteComment = async (req, res) => {
    const { id } = req.params;
    try {
        //const comment = await Comment.findOne({ id: id });
        await Post.findByIdAndUpdate(
            id,
            { archive: true },
            { new: true }
        );

        res.status(200).json({ deleted: "true" });
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
};

//controller for fetching comments for a specific post
export const getCommentBasedOnPostId = async (req, res) => {
    const { id } = req.params;
    try {
        //let comments = await Comment.find({post: id, archive: false});
        let comments;
        if (req.query.getUserInfo && req.query.getUserInfo == "true") {
            comments = await Comment.aggregate(
                [
                    {
                        $match: {
                            post: mongoose.Types.ObjectId(id),
                            archive: false
                        }
                    },
                    {
                        $lookup: {
                            from: "userschemas",
                            localField: "user",
                            foreignField: "_id",
                            as: "userInfo"
                        }
                    }
                ]
            );
        } else {
            comments = await Comment.find({ post: id, archive: false });
        }
        res.status(200).json(comments);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};
