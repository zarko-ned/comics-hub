// src/models/chapter.js
import supabase from '../../db.js';

export const getChaptersByComicID = async (comicID) => {
    const { data, error } = await supabase
        .from('chapter')
        .select(`
            chapter_id,comic_id,title,description,chapter_number,storage_id, poster_image_url,
            author:author_id (author_id,name)
        `)
        .eq('comic_id', comicID);

    if (error) throw error;
    return data;
};
