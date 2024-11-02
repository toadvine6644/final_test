import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './src/router/userRouter.js';
import postRoutes from './src/router/postRouter.js';
import commentRoutes from './src/router/commnetRouter.js';

const app = express();
app.use(express.json());

const mongoURI = 'mongodb://localhost:27017/learn';
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/posts', commentRoutes);

app.listen(3002, () => {
    console.log('Server is running on port 3002');
});
