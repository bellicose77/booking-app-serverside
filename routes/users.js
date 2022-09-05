import express from 'express';
import { updateUser } from '../controllers/user';

const router = express.Router()

//update api
router.put('/:id',updateUser)
export default router