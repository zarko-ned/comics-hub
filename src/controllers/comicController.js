import { getAllComics } from '../models/comic.js';

export const fetchAllComics = async (req, res) => {
    try {
        const comics = await getAllComics();
        res.json({ comics });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};