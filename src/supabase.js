import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://rbtvbwgnnnlolftwizro.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJidHZid2dubm5sb2xmdHdpenJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA2NTg4NjcsImV4cCI6MjA2NjIzNDg2N30.f1z1JbRdDfdVqdC2i2dgvHol98dzQsWo-fwU2awoA9I'
export const supabase = createClient(supabaseUrl, supabaseKey)