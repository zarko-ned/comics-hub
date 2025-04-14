import { getChaptersByComicID } from '../models/chapter.js';

export const fetchChaptersByComicID = async (req, res) => {
    try {
        const comicID = req.params.comicID;
        const page = parseInt(req.query.page) || 1;

        const { data, count } = await getChaptersByComicID(comicID, page);
        res.json({
            chapters: data,
            total: count,
            currentPage: page,
            totalPages: Math.ceil(count / 20)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
