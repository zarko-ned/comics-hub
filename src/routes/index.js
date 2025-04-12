import express from 'express';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

// Definiši tvoje rute ovde
router.get('/', (req, res) => {
    res.redirect('/comics');  // Status 302 (privremeno preusmerenje)
});

export default router;  // Promenjeno iz module.exports