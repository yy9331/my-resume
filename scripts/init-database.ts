import { Pool } from 'pg';

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  console.error('❌ DATABASE_URL environment variable is not set');
  console.error('Please create .env.local with your database credentials');
  console.error('See .env.local.example for template');
  process.exit(1);
}

const pool = new Pool({
  connectionString: DATABASE_URL,
  ssl: false,
});

const createTableSQL = `
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
`;

async function initDatabase() {
  console.log('🔌 Connecting to database...');
  console.log(`   Host: 154.89.149.178:5432`);
  console.log(`   Database: cv_database`);
  console.log('');

  try {
    // Test connection
    const client = await pool.connect();
    console.log('✅ Connected successfully!');
    console.log('');

    // Check if table exists
    const checkResult = await client.query(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_name = 'guestbook_messages'
      );
    `);

    const tableExists = checkResult.rows[0].exists;

    if (tableExists) {
      console.log('ℹ️  Table "guestbook_messages" already exists');
      
      // Get row count
      const countResult = await client.query('SELECT COUNT(*) FROM guestbook_messages');
      console.log(`   Current messages: ${countResult.rows[0].count}`);
    } else {
      console.log('📦 Creating table "guestbook_messages"...');
      
      // Create table and indexes
      await client.query(createTableSQL);
      
      console.log('✅ Table created successfully!');
      console.log('✅ Indexes created successfully!');
    }

    console.log('');
    console.log('🎉 Database initialization complete!');
    console.log('');
    console.log('Next steps:');
    console.log('  1. Run "npm run dev"');
    console.log('  2. Visit http://localhost:3000/guestbook');
    console.log('  3. Test the guestbook functionality');

    client.release();
    await pool.end();
  } catch (error) {
    console.error('❌ Error:', error);
    process.exit(1);
  }
}

initDatabase();
