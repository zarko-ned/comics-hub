// example.js
import supabase from './db.js'

async function test() {
    const { data, error } = await supabase.from('comic').select('*')

    if (error) {
        console.error('❌ Greška:', error)
    } else {
        console.log('✅ Podaci:', data)
    }
}

test()
