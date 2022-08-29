import express from 'express';
import Hotel from '../models/Hotel';

const router = express.Router()

// Create api
router.post("/",async(req,res)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
          res.status(500).json(err);
    }
})

export default router