import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    city:{
        type: String
    },
    address:{
        type: String,
        required: true
    },
    distance:{
        type: String,
        required: true
    },
    photos:{
        type: [String]
    },
    title:{
        type: String
    },
    description:{
        type: String
    },
    rating:{
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
        type: String
    }



})