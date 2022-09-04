import Hotel from "../models/Hotel.js";

export const createHotel = async (req,res,next)=>{
    const newHotel = new Hotel(req.body)
    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel);

    }catch(err){
          next(err);
    }
};
export const updateHotel = async (req,res,next)=>{
    try{
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
            {$set:req.body},{new:true}
        )
        res.status(200).json(updateHotel);

    }catch(err){
          next(err);
    }
};
export const deleteHotel = async (req,res,next)=>{
    
};
export const getHotel = async (req,res,next)=>{
    
};
export const getHotels = async (req,res,next)=>{
    
};
