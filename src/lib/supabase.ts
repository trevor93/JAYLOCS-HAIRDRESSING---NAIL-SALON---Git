import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://kmyltzhphbrxcihimlcr.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtteWx0emhwaGJyeGNpaGltbGNyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTcyMTU4NDIsImV4cCI6MjA3Mjc5MTg0Mn0.wWrDXxVoBovPRUGP6KECttbRiRIz54VspZtn9RpTWnY'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)