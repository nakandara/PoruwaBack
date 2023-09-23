import express from 'express';

import {createProfile,getProfile} from '../controllers/profileController.js';

const router = express.Router();


router.post('/createProfile', createProfile);
router.get('/getProfile/:userId', getProfile);


export default router;
