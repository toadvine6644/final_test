import express from 'express';
import { createPost, editPost, getPosts, getPostById } from '../controller/postController.js';

const router = express.Router();

router.post('/', createPost);
router.put('/:postId', editPost);
router.get('/', getPosts);
router.get('/:postId', getPostById);

export default router;