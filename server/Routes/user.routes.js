import express from 'express';
import { getUserProfileHandler } from '../controllers/user.controller.js';
import authenticate from '../middleware/authenticate.js';
const router=express();

router.get('/profile',authenticate,getUserProfileHandler);

export default router;