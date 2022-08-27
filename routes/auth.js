import express from 'express';

const router = express.Router()

router.get('/',(req,res)=>{
    res.send("auth api is here")
});
router.get('/register',(req,res)=>{
    res.send("auth register is here")
})
export default router