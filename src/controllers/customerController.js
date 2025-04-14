import {
    getCustomerByCustomerID,
    saveCustomerChapterProgress,
    addCustomerChapterToFavourite,
    createCustomer
} from '../models/customer.js';

export const createNewCustomer = async (req, res) => {
    const {name, username, password} = req.body;
    try {
        const customer = await createCustomer(name, username, password);
        res.status(201).json({customer});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}

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

export const addChapterToFavourite = async (req, res) => {
    const {chapterID, favourite} = req.body;
    const customerID = req.user.customer_id; // User je trenutno autentifikovani korisnik

    try {
        await addCustomerChapterToFavourite(customerID, chapterID, favourite);
        res.json({success: true, message: 'Favourite status updated successfully'});
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}