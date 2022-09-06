import express from 'express';
import { createRoom, deleteRoom, getRoom, getRooms, updateRoom } from '../controllers/room';
import { verifyAdmin } from '../utils/verifyToken';

const router = express.Router()

router.post('/:hotelid',verifyAdmin,createRoom);

//update 
router.put('/:id',verifyAdmin,updateRoom);
//delete
router.delete('/:id/:hotelid',verifyAdmin,deleteRoom);

//GET

router.get("/:id", getRoom);
//GET ALL

router.get("/", getRooms);

export default router