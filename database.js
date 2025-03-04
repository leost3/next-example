import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  user: "neondb_owner",
  password: "npg_Hydp7TObx9Ek", // 🔴 Replace with your actual password
  host: "ep-dark-glitter-a40n37vv-pooler.us-east-1.aws.neon.tech", // ✅ Use the pooler host
  port: 5432,
  database: "neondb",
  ssl: { rejectUnauthorized: false }, // ✅ Ensure SSL works
  max: 10, // Maximum concurrent connections
  idleTimeoutMillis: 30000, // Close idle connections after 30s
  connectionTimeoutMillis: 2000, // Fail after 2s if no connection
});

export const query = async (text, params) => {
  const client = await pool.connect();
  try {
    const result = await client.query(text, params);
    return result;
  } catch (error) {
    console.error("Database error:", error);
    throw error;
  } finally {
    client.release(); // ✅ Release back to pool
  }
};
