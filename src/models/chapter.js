// src/models/chapter.js
import supabase from '../../db.js';

export const getChaptersByComicID = async (comicID, page = 1) => {
    const pageSize = 20;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const {data, count, error} = await supabase
        .from('chapter')
        .select(`
            chapter_id,comic_id,title,description,chapter_number,storage_id,poster_image_url,
            author:author_id (author_id,name)
        `, {count: 'exact'})
        .eq('comic_id', comicID)
        .range(from, to);

    if (error) throw error;
    return {data, count};
};

export const getChapterByChapterID = async (chapterID) => {
    const { data, error } = await supabase
        .from('chapter')
        .select(`
            chapter_id, comic_id, title, description, chapter_number, storage_id, poster_image_url,
            author:author_id (author_id, name),
            storage:storage_id (storage_id, base_path, num_pages, extension)
        `)
        .eq('chapter_id', chapterID)
        .single();

    if (error) {
        throw error;
    }

    return data;
};
