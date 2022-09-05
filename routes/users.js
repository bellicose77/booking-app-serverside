import express from 'express';
import { deleteUser, updateUser } from '../controllers/user';

const router = express.Router()

//update api
router.put('/:id',updateUser);
//delete api
router.delete('/:id',deleteUser)
export default router