import express from 'express';
import { fetchAllComics } from '../controllers/comicController.js';
import {fetchChaptersByComicID} from "../controllers/chapterController.js";
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
router.use(authenticate);

router.get('/', fetchAllComics);
router.get('/:comicID', fetchChaptersByComicID);


export default router;  // Ključna promena! Umesto module.exports