import express from 'express';
import {authenticate} from "../middleware/authMiddleware.js";
import {fetchChapterByID} from "../controllers/chapterController.js";


const router = express.Router();
router.use(authenticate);

/**
 * @swagger
 * /chapters/{chapterID}:
 *   get:
 *     tags:
 *       - Chapter
 *     summary: Fetch chapter details
 *     description: Retrieves details of a chapter by its ID.
 *     parameters:
 *       - in: path
 *         name: chapterID
 *         required: true
 *         schema:
 *           type: string
 *         description: The ID of the chapter.
 *     responses:
 *       200:
 *         description: Successfully retrieved chapter details
 *         content:
 *           application/json:
 *             example:
 *               chapter_id: 1
 *               comic_id: 1
 *               title: "Best of Donatello"
 *               description: "This next in a series TMNT reprints that showcase the best stories of your favorite TMNT characters! Featuring tales from different publishers, this issue showcases the ever-intelligent Donatello! At almost 100 pages, this story has all the brainiac mutant Turtle you could ask for!"
 *               chapter_number: 1
 *               storage_id: 1
 *               poster_image_url: "https://jsarskkgglszznuemyhc.supabase.co/storage/v1/object/public/comic-pages/tmnt/chapter_1/01.jpg"
 *               author:
 *                 name: "Brahm Revel"
 *                 author_id: 2
 *               storage:
 *                 base_path: "tmnt/chapter_1"
 *                 extension: "jpg"
 *                 num_pages: 5
 *                 storage_id: 1
 *       404:
 *         description: Chapter not found
 */
router.get('/:chapterID', fetchChapterByID);


export default router;  // Ključna promena! Umesto module.exports