import { getAllComics } from '../models/comic.js';

export const fetchAllComics = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const { data, count } = await getAllComics(page);
        res.json({
            comics: data,
            total: count,
            currentPage: page,
            totalPages: Math.ceil(count / 20)
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
