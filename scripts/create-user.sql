-- Create user and database (if needed)
-- Run this as PostgreSQL superuser (e.g., postgres)
-- IMPORTANT: Replace YOUR_USERNAME and YOUR_PASSWORD with actual values

-- Create user if not exists
DO $$
BEGIN
  IF NOT EXISTS (SELECT FROM pg_user WHERE usename = 'YOUR_USERNAME') THEN
    CREATE USER YOUR_USERNAME WITH PASSWORD 'YOUR_PASSWORD';
  END IF;
END
$$;

-- Create database if not exists
SELECT 'CREATE DATABASE cv_database OWNER yy9331'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'cv_database');

-- Grant privileges
GRANT ALL PRIVILEGES ON DATABASE cv_database TO YOUR_USERNAME;

-- Connect to cv_database and grant schema privileges
\c cv_database

-- Grant schema privileges
GRANT ALL PRIVILEGES ON SCHEMA public TO YOUR_USERNAME;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO YOUR_USERNAME;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public TO YOUR_USERNAME;

-- Set default privileges for future objects
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON TABLES TO YOUR_USERNAME;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL ON SEQUENCES TO YOUR_USERNAME;
