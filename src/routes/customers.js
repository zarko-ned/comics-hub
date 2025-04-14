import express from 'express';
import {
    fetchCustomerByCustomerID,
    saveChapterProgress,
    addChapterToFavourite,
    createNewCustomer
} from "../controllers/customerController.js";
import {authenticate} from '../middleware/authMiddleware.js';


const router = express.Router();
router.use(authenticate);

router.post('/create', createNewCustomer);
router.get('/:customerID', fetchCustomerByCustomerID);
router.post('/save-progress', saveChapterProgress);
router.post('/add-favourite', addChapterToFavourite);


export default router;