// U bilo kom drugom fajlu (npr. routes/comics.js)
import supabase from '../../db.js';  // Putanja zavisi od lokacije



export const getAllComics = async (page = 1) => {
    const pageSize = 20;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data, count, error } = await supabase
        .from('comic')
        .select('*', { count: 'exact' })
        .range(from, to);

    if (error) throw error;
    return { data, count };
};
