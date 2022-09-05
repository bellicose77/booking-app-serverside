import jwt from 'jsonwebtoken';
import { createError } from './error.js';

export const verifyToken=(req,res,next)=>{
    const token = req.cookie.access_token;
}