import mongoose  from "mongoose";
import { Schema } from "mongoose";

const userSchema =  mongoose.Schema({
    username:{
        type: String,
        requied: true,
        unique: true
    },
    email:{
       type: String,
       required: true,
       unique: true
    },
    password:{
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false,
      }

},
{timestamps: true}
)