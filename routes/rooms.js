import express from 'express';
import { createRoom } from '../controllers/room';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router()

router.post('/:id',verifyAdmin,createRoom)
export default router