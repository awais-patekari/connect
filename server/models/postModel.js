import mongoose from "mongoose";

//Defining the schema for posts
const postSchema = mongoose.Schema({
    user: mongoose.ObjectId,
    text: String,
    tags: [String],
    createdAt: {
        type: Number,
        default: new Date().getTime()
    },
    likes: {
        type: Number,
        default: 0
    },
    image: String,
    editedAt: {
        type: Number,
        default: new Date().getTime()
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Posts = mongoose.model('postSchema', postSchema);

export default Posts;