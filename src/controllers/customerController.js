import { getCustomerByCustomerID } from '../models/customer.js';

export const fetchCustomerByCustomerID = async (req, res) => {
    const { customerID } = req.params;
    try {
        const customer = await getCustomerByCustomerID(customerID);
        res.json({ customer });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};