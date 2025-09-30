-- Guestbook Database Initialization Script
-- Run this SQL in your PostgreSQL database

-- Create guestbook_messages table
CREATE TABLE IF NOT EXISTS guestbook_messages (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  author_address TEXT,
  author_github TEXT,
  author_name TEXT NOT NULL,
  message TEXT NOT NULL,
  CONSTRAINT check_author CHECK (
    author_address IS NOT NULL OR author_github IS NOT NULL
  )
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_messages_created_at ON guestbook_messages(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_messages_author_address ON guestbook_messages(author_address);
CREATE INDEX IF NOT EXISTS idx_messages_author_github ON guestbook_messages(author_github);

-- Verify table creation
SELECT 'Table created successfully!' as status;
SELECT table_name, column_name, data_type 
FROM information_schema.columns 
WHERE table_name = 'guestbook_messages'
ORDER BY ordinal_position;
