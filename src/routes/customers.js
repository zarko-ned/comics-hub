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


/**
 * @swagger
 * /customers/create:
 *   post:
 *     tags:
 *       - Customer
 *     summary: Create a new customer
 *     description: Creates a new customer with the provided details.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 description: The name of the customer.
 *                 example: John Doe
 *               email:
 *                 type: string
 *                 description: The email of the customer.
 *                 example: john.doe@example.com
 *               password:
 *                 type: string
 *                 format: password
 *                 description: The password for the customer.
 *                 example: password123
 *     responses:
 *       201:
 *         description: Customer successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 customerID:
 *                   type: string
 *                   description: The ID of the newly created customer.
 *                   example: 12345
 *
 *
 */

router.post('/create', createNewCustomer);

/**
 * @swagger
 * /customers/{customerID}:
 *   get:
 *     tags:
 *       - Customer
 *     summary: Fetch customer details
 *     description: Retrieves details of a customer by their ID.
 *     parameters:
 *       - in: path
 *         name: customerID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the customer.
 *     responses:
 *       200:
 *         description: Successfully retrieved customer details
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 customerID:
 *                   type: string
 *                   example: 12345
 *                 name:
 *                   type: string
 *                   example: John Doe
 *                 email:
 *                   type: string
 *                   example: john.doe@example.com
 *                 createdAt:
 *                   type: string
 *                   format: date-time
 *                   example: 2023-10-01T12:00:00Z
 */
router.get('/:customerID', fetchCustomerByCustomerID);

/**
 * @swagger
 * /customers/save-progress:
 *   post:
 *     tags:
 *       - Customer
 *     summary: Save chapter progress
 *     description: Saves the reading progress of a customer for a specific chapter.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerID
 *               - chapterID
 *               - progress
 *             properties:
 *               customerID:
 *                 type: string
 *                 description: The ID of the customer.
 *                 example: 12345
 *               chapterID:
 *                 type: string
 *                 description: The ID of the chapter.
 *                 example: 67890
 *               progress:
 *                 type: number
 *                 description: The progress percentage of the chapter.
 *                 example: 75
 *     responses:
 *       200:
 *         description: Progress successfully saved
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Progress saved successfully.
 */
router.post('/save-progress', saveChapterProgress);

/**
 * @swagger
 * /customers/add-favourite:
 *   post:
 *     tags:
 *       - Customer
 *     summary: Add chapter to favourites
 *     description: Adds a specific chapter to the customer's list of favourite chapters.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - customerID
 *               - chapterID
 *             properties:
 *               customerID:
 *                 type: string
 *                 description: The ID of the customer.
 *                 example: 12345
 *               chapterID:
 *                 type: string
 *                 description: The ID of the chapter to be added to favourites.
 *                 example: 67890
 *     responses:
 *       200:
 *         description: Chapter successfully added to favourites
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Chapter added to favourites successfully.
 */
router.post('/add-favourite', addChapterToFavourite);


export default router;