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
    try{

        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("data deleted successfully");

    }
    catch(err){
       next(err)
    }
};
export const getHotel = async (req,res,next)=>{
    try{
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel);

    }catch(err){
          next(err);
    }
    
};
export const getHotels = async (req,res,next)=>{
    const {min,max,...others} = req.query
    try{
        const hotels = await Hotel.find({
            ...others,chiptesPrice :{ $gt : min | 1 , $lt : max || 999}
        }).limit(req.query.limit)
         res.status(200).json(hotels);
 
     }catch(err){
           next(err);
     }
};
export const countByCity = async (req,res,next)=>{
    const cities = req.query.cities.split(",")
    try{
       const list = await Promise.all(
        cities.map((city)=>{
            return Hotel.countDocuments({city:city})
        })
        );
        res.status(200).json(list);
 
     }catch(err){
           next(err);
     }
};
export const countByType = async (req,res,next)=>{
   
    try{
       const hotelCount = await Hotel.countDocuments({type:"hotel"});
       const appartmentCount = await Hotel.countDocuments({type:"appartment"});
       const villaCount = await Hotel.countDocuments({type:"villa"});
       const resortCount = await Hotel.countDocuments({type:"resort"});
       const cabinCount = await Hotel.countDocuments({type:"cabin"});
        res.status(200).json([
            { type: "hotel", count: hotelCount },
            { type: "apartments", count: appartmentCount },
            { type: "resorts", count: resortCount },
            { type: "villas", count: villaCount },
            { type: "cabins", count: cabinCount },
        ]);
 
     }catch(err){
           next(err);
     }
};

export const getHotelRooms = async(req,res,next)=>{
    try{

    }catch(err){
        next(err)
    }

}