import Post from '../model/postModel.js';
import { v4 as uuidv4 } from 'uuid';

export const addComment = async (req, res) => {
    const { postId } = req.params;
    const { userId, content } = req.body;

    if (!userId || !content) {
        return res.status(400).json({ error: 'userId and content are required' });
    }

    const post = await Post.findOne({ postId });
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    const commentId = `CMT${uuidv4()}`;
    const newComment = { commentId, userId, content };

    post.comments.push(newComment);
    await post.save();

    res.status(201).json(newComment);
};

export const editComment = async (req, res) => {
    const { commentId } = req.params;
    const { userId, content } = req.body;

    if (!userId || !content) {
        return res.status(400).json({ error: 'userId and content are required' });
    }

    const post = await Post.findOne({ 'comments.commentId': commentId });
    if (!post) {
        return res.status(404).json({ error: 'Comment not found' });
    }

    const comment = post.comments.id(commentId);
    if (!comment || comment.userId !== userId) {
        return res.status(403).json({ error: 'You are not allowed to edit this comment' });
    }

    comment.content = content;
    await post.save();

    res.status(200).json(comment);
};

export const getCommentsByPostId = async (req, res) => {
    const { postId } = req.params;

    const post = await Post.findOne({ postId });
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post.comments);
};