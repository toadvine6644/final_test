import Post from '../model/postModel.js';

export const createPost = async (req, res) => {
    const { userId, title, content } = req.body;
    if (!userId || !title || !content) {
        return res.status(400).json({ error: 'userId, title, and content are required' });
    }

    const postId = `POST${uuidv4()}`;
    const newPost = new Post({ postId, userId, title, content, comments: [] });

    try {
        await newPost.save();
        res.status(201).json(newPost);
    } catch (error) {
        res.status(500).json({ error: 'Error creating post' });
    }
};

export const editPost = async (req, res) => {
    const { postId } = req.params;
    const { userId, title, content } = req.body;

    const post = await Post.findOne({ postId });
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }
    if (post.userId !== userId) {
        return res.status(403).json({ error: 'You are not allowed to edit this post' });
    }

    post.title = title;
    post.content = content;

    await post.save();
    res.status(200).json(post);
};

export const getPosts = async (req, res) => {
    const posts = await Post.find();
    const response = posts.map(post => ({
        ...post.toObject(),
        comments: post.comments.slice(0, 3)
    }));

    res.status(200).json(response);
};

export const getPostById = async (req, res) => {
    const { postId } = req.params;

    const post = await Post.findOne({ postId });
    if (!post) {
        return res.status(404).json({ error: 'Post not found' });
    }

    res.status(200).json(post);
};