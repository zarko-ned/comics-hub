import express from 'express';
import indexRouter from './routes/index.js';
import comicsRouter from './routes/comics.js';
import authRouter from './routes/auth.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
// const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rute
app.use('/', indexRouter);       // Osnovna ruta (/)
app.use('/comics', comicsRouter); // Comics ruta (/comics)
app.use('/login', authRouter); // Auth ruta (/login)

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


export default app;