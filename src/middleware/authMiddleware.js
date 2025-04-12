// middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {

    const token = req.header('Authorization')?.replace('Bearer ', '');
// Uzimanje JWT_SECRET iz .env fajla
    const JWT_SECRET = process.env.JWT_SECRET;
    if (!token) {
        return res.status(401).json({error: 'No token provided'});
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); // koristiš odgovarajući tajni ključ
        req.user = decoded; // čuvaš korisničke podatke
        next(); // pozivaš sledeći middleware ili rutu
    } catch (err) {
        return res.status(401).json({error: 'Invalid token'});
    }
};
