import express from 'express';
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user';

const router = express.Router()

//update api
router.put('/:id',updateUser);
//delete api
router.delete('/:id',deleteUser);
//get user
router.get('/:id',getUser);
//get all users
router.get('/',getUsers);


export default router