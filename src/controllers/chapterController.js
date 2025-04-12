import { getChaptersByComicID } from '../models/chapter.js';

export const fetchChaptersByComicID = async (req, res) => {
    const { comicID } = req.params;

    try {
        const chapters = await getChaptersByComicID(comicID);
        res.json({ chapters });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};