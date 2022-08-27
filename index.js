import express from 'express';
import dotenv from 'dotenv';
const app = express();
dotenv.config();
const port = 8000;
const connect = async () =>{
  try{
    await moongoose.config(process.env.MONGO)
  } catch(error){
    throw error;
  }

}

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
// n:dulal


// pass:CSZ4YRMGaI3momBN