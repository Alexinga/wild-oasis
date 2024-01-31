import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://zbbwgxqfcotrsvcurswx.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpiYndneHFmY290cnN2Y3Vyc3d4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDQ0ODY0NDcsImV4cCI6MjAyMDA2MjQ0N30.6bSH3yLTKq2iPqt_60zGWEfR0sgNZ0LYLx1wiUDkwwo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
