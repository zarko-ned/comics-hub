import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { findCustomerByUsername } from '../models/customer.js';

// Uzimanje JWT_SECRET iz .env fajla
const JWT_SECRET = process.env.JWT_SECRET;

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Pronađi korisnika po username-u
        const customer = await findCustomerByUsername(username);

        if (!customer) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Proveri lozinku
        const isPasswordValid = await bcrypt.compare(password, customer.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        // Generiši JWT token
        const token = jwt.sign(
            { customer_id: customer.customer_id, username: customer.username },
            JWT_SECRET,
            { expiresIn: '1h' }
        );

        res.json({ token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};