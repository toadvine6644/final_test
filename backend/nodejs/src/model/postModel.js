import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    postId: { type: String, required: true },
    userId: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    comments: [{
        commentId: { type: String, required: true },
        userId: { type: String, required: true },
        content: { type: String, required: true },
    }],
});

const Post = mongoose.model('Post', postSchema);

export default Post;