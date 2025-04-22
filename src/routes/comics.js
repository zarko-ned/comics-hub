import express from 'express';
import { fetchAllComics } from '../controllers/comicController.js';
import { fetchChaptersByComicID } from '../controllers/chapterController.js';
import { authenticate } from '../middleware/authMiddleware.js';

const router = express.Router();
/**
 * @swagger
 * /:
 *   get:
 *     summary: Fetch a list of all comics
 *     description: Returns a list of comics with their details, including title, description, creation date, status type, and poster image URL.
 *     responses:
 *       200:
 *         description: Successfully retrieved the list of comics
 *         content:
 *           application/json:
 *             example:
 *               comics:
 *                 - comic_id: 1
 *                   title: "Nindža Kornjače"
 *                   created_at: "2025-04-08T19:42:03.835064+00:00"
 *                   description: "Nindža kornjače  jesu izmišljeni tim koji čine četiri antropomorfne kornjače. Njihov sensei, učitelj Splinter, načinio je od njih vešte ratnike. Njihovi neprijatelji su Sekač, nindže Stopala, robot Nano, Ljubičasti Zmajevi i mnogi drugi."
 *                   status_type_id: 1
 *                   poster_image_url: "https://jsarskkgglszznuemyhc.supabase.co/storage/v1/object/public/comic-pages/spider-man/poster.jpg"
 *                 - comic_id: 2
 *                   title: "Spider-man"
 *                   created_at: "2025-04-08T22:47:16.629252+00:00"
 *                   description: "Spajdermen je superheroj iz stripa izdavačke kuće Marvel Comics. Autori stripa su scenarista Sten Li (Stan Lee) i crtač Stiv Ditko (Steve Ditko). Lik se prvi put pojavio u stripu avgusta 1962. u 15. broju edicije Amazing Fantasy i vremenom je postao jedan od najpopularnijih, najdugotrajnijih i komercijalno najuspešnijih superheroja širom sveta, i nesumnjivo najpoznatiji lik izdavača Marvel"
 *                   status_type_id: 1
 *                   poster_image_url: "https://jsarskkgglszznuemyhc.supabase.co/storage/v1/object/public/comic-pages/spider-man/poster.jpg"
 *               total: 2
 *               currentPage: 1
 *               totalPages: 1
 */

router.get('/', fetchAllComics);
router.get('/:comicID', authenticate, fetchChaptersByComicID);

export default router;