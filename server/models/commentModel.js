import mongoose from "mongoose";

//Defining the schema for comments
export const commentSchema = mongoose.Schema({
    post: mongoose.ObjectId,
    user: mongoose.ObjectId,
    comment: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
    archive: {
        type: Boolean,
        default: false
    }
});

const Comment = mongoose.model('commentSchema', commentSchema);

export default Comment;