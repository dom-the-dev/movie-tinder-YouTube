import {createClient} from "@supabase/supabase-js";

const supabaseKey = process.env.REACT_APP_SUPABASE_KEY
const supabaseUrl = process.env.REACT_APP_SUBABASE_URL

export const supabase = createClient(supabaseUrl, supabaseKey)