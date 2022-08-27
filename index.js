import express from 'express';
import dotenv from 'dotenv';
import mongoose  from 'mongoose';
import authRoute from './routes/auth.js'
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
app.use('/api/auth',authRoute);

app.listen(port, () => {
    connect()
    console.log(`Example app listening on port ${port}`)
  })
// n:dulal


// pass:CSZ4YRMGaI3momBN