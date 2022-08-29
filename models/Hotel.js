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
        require: true
    },
    distance:{
        type: Number,
        require: true
    },
    photos:{
        type: String
    },
    title:{
        type: String
    },
    description:{
        type: String
    }



})