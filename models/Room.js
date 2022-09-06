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
    rooms:{
        type: [String]
    },
    chepestPrice:{
        type: Number,
        required: true
    },
    featured:{
        type: Boolean,
        default: false
    }



});
export default mongoose.model("Room",roomSchema);