import express from 'express';
import { addComment, editComment, getCommentsByPostId } from '../controller/commentController.js';

const router = express.Router();

router.post('/:postId/comments', addComment);
router.put('/comments/:commentId', editComment);
router.get('/:postId/comments', getCommentsByPostId);

export default router;