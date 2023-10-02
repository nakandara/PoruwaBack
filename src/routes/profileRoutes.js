import express from 'express';

import {createProfile,getProfile,updateProfile} from '../controllers/profileController.js';

const router = express.Router();


router.post('/createProfile', createProfile);
router.get('/getProfile/:userId', getProfile);
router.post('/updateProfile/:userId', updateProfile);


export default router;
