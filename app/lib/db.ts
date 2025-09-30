import { Pool } from 'pg';

// Direct PostgreSQL connection - requires DATABASE_URL environment variable
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set. Please check your .env.local file.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_SSL === 'true' ? { rejectUnauthorized: false } : false,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export interface GuestbookMessage {
  id: string;
  created_at: string;
  author_address?: string;
  author_github?: string;
  author_name: string;
  message: string;
}

export const db = {
  // Get all messages (no filtering - everyone can see all messages)
  async getMessages(): Promise<GuestbookMessage[]> {
    const query = 'SELECT * FROM guestbook_messages ORDER BY created_at DESC';
    const result = await pool.query(query);
    return result.rows;
  },

  async insertMessage(data: {
    author_name: string;
    message: string;
    author_address?: string;
    author_github?: string;
  }): Promise<GuestbookMessage> {
    const query = `
      INSERT INTO guestbook_messages (author_name, message, author_address, author_github)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    `;
    
    const result = await pool.query(query, [
      data.author_name,
      data.message,
      data.author_address?.toLowerCase() || null,
      data.author_github || null
    ]);
    
    return result.rows[0];
  },

  async deleteMessage(messageId: string): Promise<boolean> {
    const query = 'DELETE FROM guestbook_messages WHERE id = $1 RETURNING id';
    const result = await pool.query(query, [messageId]);
    return result.rowCount !== null && result.rowCount > 0;
  }
};

export default pool;
