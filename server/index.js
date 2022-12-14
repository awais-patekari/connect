import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

import postRoutes from './routes/posts.js';
import userRoutes from './routes/user.js';
import commentRoutes from './routes/comment.js';

const app = express();

app.use(cors());
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));

//Specifying route entry points
app.use('/posts', postRoutes);
app.use('/user', userRoutes);
app.use('/comment', commentRoutes);

const CONNECTION_URL = "mongodb+srv://awaisPatekari:Kyhv9t7Bg1LBw7fZ@cluster0.cjitnhi.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 4000;

//Connecting to the database
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((err) => console.log(err.message));
