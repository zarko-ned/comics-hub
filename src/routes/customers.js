import express from 'express';
import {fetchCustomerByCustomerID} from "../controllers/customerController.js";
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authenticate);

router.get('/:customerID', fetchCustomerByCustomerID);


export default router;