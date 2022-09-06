import mongoose from 'mongoose';
const { Schema } = mongoose;

const roomSchema = new  mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    
    description:{
        type: String
    },
    maxPeople:{
         type: Number,
         min: 0,
         max: 5
    },
    roomNumbers: [{ number: Number, unavailableDates: {type: [Date]}}],
    



},
{ timestamps: true }
);
export default mongoose.model("Room",roomSchema);