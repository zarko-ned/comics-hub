import express from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../swagger.js';
import cors from 'cors';

import indexRouter from './routes/index.js';
import comicsRouter from './routes/comics.js';
import authRouter from './routes/auth.js';
import customersRouter from './routes/customers.js'
import chaptersRouter from './routes/chapters.js';

import dotenv from 'dotenv';
dotenv.config();


const app = express();
// const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
// Swagger UI ruta
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(cors({
  origin: ['http://localhost:3000', 'https://comics-hub.onrender.com'],
  // privremeno dozvoljeno za sve
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));



// Rute
app.use('/login', authRouter); // Auth ruta (/login)
app.use('/', indexRouter);       // Osnovna ruta (/)
app.use('/comics', comicsRouter); // Comics ruta (/comics)
app.use('/chapters', chaptersRouter); // Chapters ruta (/chapters)
app.use('/customers', customersRouter); // Customers ruta (/customers)



// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});


export default app;