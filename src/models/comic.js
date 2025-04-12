// U bilo kom drugom fajlu (npr. routes/comics.js)
import supabase from '../../db.js';  // Putanja zavisi od lokacije



export const getAllComics = async () => {
    const { data, error } = await supabase
        .from('comic')
        .select(`
            *
        `);

    if (error) throw error;
    return data;
};