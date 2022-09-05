import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router()

//update api
router.get('/checkoutauthenticated',verifyToken,(req,res)=>{
    res.send("hello user, you'r authenticated")
})
router.put('/:id',updateUser);
//delete api
router.delete('/:id',deleteUser);
//get user
router.get('/:id',getUser);
//get all users
router.get('/',getUsers);


export default router