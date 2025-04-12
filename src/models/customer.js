import supabase from '../../db.js';

export const findCustomerByUsername = async (username) => {
    const {data, error} = await supabase
        .from('customer')
        .select('customer_id, username, password')
        .eq('username', username)
        .eq('status_type_id', 1)
        .single();

    if (error) throw error;
    return data;
};

export const getCustomerByCustomerID = async (customerID) => {
    const {data, error} = await supabase
        .from('customer')
        .select('customer_id, name, username, status_type_id')
        .eq('customer_id', customerID)  // Pretraga po customer_id
        .single();  // Očekujemo samo jedan rezultat

    if (error) {
        throw error;
    }

    return data;
};

export const saveCustomerChapterProgress = async (customerID, chapterID, pageNumber) => {
    const {data, error} = await supabase
        .from('customer_chapter')
        .upsert(
            [
                {
                    customer_id: customerID,
                    chapter_id: chapterID,
                    page_number: pageNumber,
                }
            ],
            {
                onConflict: ['customer_id', 'chapter_id']
            }
        )
        .single();


    if (error) {
        throw error;
    }

    return data;
};

export const addCustomerChapterToFavourite = async (customerID, chapterID, favourite = 0) => {
    const {data, error} = await supabase
        .from('customer_chapter')
        .upsert(
            [
                {
                    customer_id: customerID,
                    chapter_id: chapterID,
                    favourite: favourite,
                }
            ],
            {
                onConflict: ['customer_id', 'chapter_id']
            }
        )
        .single();


    if (error) {
        throw error;
    }

    return data;
};

