import express from 'express';

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("auth api is here")
})
export default router