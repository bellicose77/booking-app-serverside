import express from 'express';
import 
{ countByCity,
    countByType,
createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } 
from '../controllers/hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

// Create api
router.post("/",verifyAdmin,createHotel);

//update api 
router.put('/:id',verifyAdmin, updateHotel);

// delete api
router.delete('/:id',verifyAdmin,deleteHotel);

// Get single data
router.get('/find/:id',getHotel);

// get all data
router.get('/',getHotels)
router.get('/countByCity',countByCity);
router.get('/countByType',countByType);
router.get('/room/:id',getHotelRooms);


export default router