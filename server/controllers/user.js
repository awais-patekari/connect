import User from "../models/userModel.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';

//controller for creating a new user
export const createUser = async (req, res) => {
    const user = req.body;
    try{
        const u = await User.findOne({userName: user.userName});
        if(u?.userName) return res.status(401).json({message: 'Username exists!'});
        const hash = await bcrypt.hash(user.password, 10);
        const newUser = new User({...user, password: hash});
        await newUser.save();
        res.status(200).json(newUser);
    }
    catch (error){
        res.status(404).json({error: error.message})
    }
}

//controller for logging a user in
export const userLogin = async (req, res) => {
    const userDetails = req.body;
    try{
        const user = await User.findOne({userName: userDetails.userName});
        const result = await bcrypt.compare(userDetails.password, user.password);
        if(result){
            res.status(200).json({user: user});
        }
        else{
            res.status(404).json({error: "Invalid Credentials"});
        }
    }
    catch (error){
        res.status(404).json({error: error.message})
    }
};

//controller for editing a user
export const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { userName, displayPicture } = req.body;

        if (!mongoose.Types.ObjectId.isValid(id))
            return res.status(404).send(`No post with id: ${id}`);

        const newUser = {
            userName,
            displayPicture
        };

        const updatedUser = await User.findByIdAndUpdate(id, newUser, { new: true });

        res.json(updatedUser);
    } catch (error) {
        console.log("error =", error);
        res.status(404).json({ error: error.message });
    } 
};

//controller for fetching a user
export const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}