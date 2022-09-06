import Room from "../models/Room.js";

export const createRoom = async(req,res,next)=>{
    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save()

    }catch(err){
        next();
    }
}