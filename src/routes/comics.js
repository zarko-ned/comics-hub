import express from 'express';
import { fetchAllComics } from '../controllers/comicController.js';
import { fetchChaptersByComicID } from '../controllers/chapterController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', fetchAllComics);
router.get('/:comicID', authenticate, fetchChaptersByComicID);

export default router;