import supabase from '../../db.js';
import bcrypt from "bcrypt";

export const createCustomer = async (name, username, password) => {


    // Proveri da li već postoji korisnik sa tim korisničkim imenom
    const { data: existingUser, error: lookupError } = await supabase
        .from('customer')
        .select('username')
        .eq('username', username)
        .maybeSingle();

    if (lookupError) {
        throw lookupError;
    }

    if (existingUser) {
        throw new Error('Username already exists');
    }

    // Haširanje lozinke
    const hashedPassword = await bcrypt.hash(password, 12);

    // Kreiraj novog korisnika
    const newCustomer = {
        username: username,
        password: hashedPassword,
        name: name,
        status_type_id: 1,
    };

    const { data, error } = await supabase
        .from('customer')
        .insert([newCustomer])
        .select();

    if (error) {
        throw new Error('Failed to create customer');
    }

    return data[0];
};


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

