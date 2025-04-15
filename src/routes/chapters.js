import express from 'express';
import {authenticate} from "../middleware/authMiddleware.js";
import {fetchChapterByID} from "../controllers/chapterController.js";


const router = express.Router();
router.use(authenticate);


router.get('/:chapterID', fetchChapterByID);


export default router;  // Ključna promena! Umesto module.exports