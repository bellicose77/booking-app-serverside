import express from 'express';
import { createRoom, deleteRoom, updateRoom } from '../controllers/room';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router()

router.post('/:hotelid',verifyAdmin,createRoom);

//update 
router.put('/:id',verifyAdmin,updateRoom);
//delete
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom)
export default router