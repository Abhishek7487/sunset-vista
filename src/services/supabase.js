import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://tadlxuqerahjdhgwpwrr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhZGx4dXFlcmFoamRoZ3dwd3JyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDA4NDU4MjcsImV4cCI6MjAxNjQyMTgyN30.24lrV9bSWU8Qzoi0fmVWJwSuShZdVxuPYlMUGGgylDI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
