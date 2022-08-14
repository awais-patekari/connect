import mongoose from "mongoose";

//Defining the schema for users
const userSchema = mongoose.Schema({
    userName: String,
    password: String,
    email: String,
    displayPicture: String
});

const User = mongoose.model('userSchema', userSchema);

export default User;