const SUPABASE_URL = "https://zmzjfivgdovobjnpvbjy.supabase.co";
const SUPABASE_KEY = "sb_publishable_Jl4gi9s23jt3BdBFFwacmA_rqo7I5mJ";

const { createClient } = window.supabase;
const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
