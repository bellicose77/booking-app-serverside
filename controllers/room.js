import Hotel from "../models/Hotel.js";
import Room from "../models/Room.js";

export const createRoom = async(req,res,next)=>{
    const hotelid = req.params.hotelid;
    const newRoom = new Room(req.body);
    try{
        const savedRoom = await newRoom.save();
        try{
          await Hotel.findByIdAndUpdate(hotelid,{
            $push:{rooms:savedRoom._id}
          });
        }catch(err){
            next(err);
        }
        res.status(200).json(savedRoom);

    }catch(err){
        next();
    }
};
export const updateRoom = async (req,res,next)=>{
    try{
        const updateroom = await Room.findByIdAndUpdate()

    }catch(err){
        next(err);
    }
}