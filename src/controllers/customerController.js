import {getCustomerByCustomerID} from '../models/customer.js';
import {saveCustomerChapterProgress} from '../models/customer.js';

export const fetchCustomerByCustomerID = async (req, res) => {
    const {customerID} = req.params;
    try {
        const customer = await getCustomerByCustomerID(customerID);
        res.json({customer});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
};

export const saveChapterProgress = async (req, res) => {
    const {chapterID, pageNumber} = req.body;
    const customerID = req.user.customer_id; // User je trenutno autentifikovani korisnik

    try {
        await saveCustomerChapterProgress(customerID, chapterID, pageNumber);
        res.json({success: true, message: 'Progress saved successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}