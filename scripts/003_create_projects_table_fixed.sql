-- Create projects table with proper structure
CREATE TABLE IF NOT EXISTS public.projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  client VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  duration VARCHAR(50) NOT NULL,
  description TEXT NOT NULL,
  image_url TEXT NOT NULL,
  services TEXT[] NOT NULL DEFAULT '{}',
  results JSONB NOT NULL DEFAULT '[]',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access
CREATE POLICY "Allow public read access" ON public.projects
  FOR SELECT USING (true);

-- Create policy to allow authenticated users to insert/update/delete
CREATE POLICY "Allow authenticated users full access" ON public.projects
  FOR ALL USING (auth.role() = 'authenticated');
