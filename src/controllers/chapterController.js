import { getChaptersByComicID, getChapterByChapterID } from '../models/chapter.js';

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

export const fetchChapterByID = async (req, res) => {
    try {
        const chapterID = req.params.chapterID;

        const chapter = await getChapterByChapterID(chapterID);
        if (!chapter) {
            return res.status(404).json({ message: 'Chapter not found' });
        }

        res.json(chapter);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
