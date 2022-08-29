import mongoose from 'mongoose';
const { Schema } = mongoose;

const hotelSchema = mongoose.Schema({
    name:{
        type:String,
        required: true
    }
})