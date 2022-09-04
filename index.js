import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import authRoute from './routes/auth.js'
import userRoute from './routes/users.js'
import roomRoute from './routes/rooms.js'
import hotelRoute from './routes/hotels.js'

const app = express();
dotenv.config();
const port = 8000;
const connect = async () =>{
  try{
    await mongoose.connect(process.env.MONGO)
    console.log("connected to mongodb")
  } catch(error){
    throw error;
  }

};
// Middel ware
app.use(express.json())
app.use('/api/auth',authRoute);
app.use('/api/user',userRoute);
app.use('/api/room',roomRoute);
app.use('/api/hotel',hotelRoute);

app.use((req,res,next)=>{
  console.log("from middel ware")
})

app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
// n:dulal


// pass:CSZ4YRMGaI3momBN