const SUPABASE_URL = "https://zmzjfivgdovobjnpvbjy.supabase.co
";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptempmaXZnZG92b2JqbnB2Ymp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MTk4NzQsImV4cCI6MjEwMDM5NTg3NH0.enTUAHJHQsaSXFG8BUuLEXpYwelpLHL9jnf3YeJ9SmA";

const supabase = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);
