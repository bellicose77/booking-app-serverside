import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router()

//update api
// router.get('/checkoutauthenticated',verifyToken,(req,res)=>{
//     res.send("hello user, you'r authenticated")
// });
// router.get("/checkuser/:id", verifyUser, (req,res,next)=>{
//    res.send("hello user, you are logged in and you can delete your account")
// });
// router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
//       res.send("hello admin, you are logged in and you can delete all accounts")
// });
    

router.put('/:id',verifyUser, updateUser);
//delete api
router.delete('/:id',verifyUser ,deleteUser);
//get user
router.get('/:id',verifyUser ,getUser);
//get all users
router.get('/',verifyAdmin, getUsers);


export default router