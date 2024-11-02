import express from 'express';
import { getAllPosition, createPosition } from '../controller/positionController.js';

const router = express.Router();

router.get('/teacher-positions', getAllPosition);            
router.post('/teacher-positions', createPosition);       

export default router;