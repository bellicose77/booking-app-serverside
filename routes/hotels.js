import express from 'express';
import { createHotel, deleteHotel, updateHotel } from '../controllers/hotel.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const router = express.Router()

// Create api
router.post("/",createHotel);

//update api 
router.put('/:id', updateHotel);

// delete api
router.delete('/:id',deleteHotel);

// Get single data
router.get('/:id',async(req,res)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);

    }catch(err){
          res.status(500).json(err);
    }
});

// get all data
router.get('/',async(req,res,next)=>{
   
    try{
       const hotels = await Hotel.find()
        res.status(200).json(hotels);

    }catch(err){
          res.status(500).json(err);
          //next(err);
    }
})


export default router