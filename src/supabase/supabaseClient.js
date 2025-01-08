import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://qzbyuhfioclsfmzvbvia.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF6Ynl1aGZpb2Nsc2ZtenZidmlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYxOTQwMzYsImV4cCI6MjA1MTc3MDAzNn0.vKVJriB6TvNyro8T5XSvc-r7DLz3Gavxe7XL26kXZ6c'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase