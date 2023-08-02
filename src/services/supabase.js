/**
 * RVr4YM4RuJAExfB5
  Geraldina, Adrian, Flor, Andrés
 * 
 */

import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://gltgifhgwfhtxdvsysvj.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsdGdpZmhnd2ZodHhkdnN5c3ZqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA4MjgxNjksImV4cCI6MjAwNjQwNDE2OX0.v5tEvY_Zx33quPeA6O309NiRVPs4IFnjvMpohYBJ9Bg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
