import express from 'express';
import {fetchCustomerByCustomerID, saveChapterProgress} from "../controllers/customerController.js";
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authenticate);

router.get('/:customerID', fetchCustomerByCustomerID);
router.post('/save-progress', saveChapterProgress);


export default router;