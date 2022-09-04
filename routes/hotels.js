import express from 'express';
import Hotel from '../models/Hotel.js';

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
});

//update api 
router.put('/:id', async(req,res)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body},{new:true}
        )
        res.status(200).json(updateHotel);

    }catch(err){
          res.status(500).json(err);
    }
});

// delete api
router.delete('/:id',async(req,res)=>{
    try{

        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("data deleted successfully");

    }
    catch(err){
        res.status(500).json(err);
    }
});

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
    const failed = true;
    const err = new Error()
    err.status = 404;
    err.message = "Sorry not found";
    if(failed) return next(err)
   
    try{
        //const hotels = await Hotel.find()
        const hotels = await Hotel.findById('asdddfs')
        res.status(200).json(hotels);

    }catch(err){
          //res.status(500).json(err);
          next(err);
    }
})


export default router