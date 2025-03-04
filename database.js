import pg from "pg";
const { Client } = pg;

export const query = async (obj) => {
  const client = new Client({
    user: "neondb_owner",
    password: "npg_Hydp7TObx9Ek",
    host: "ep-dark-glitter-a40n37vv.us-east-1.aws.neon.tech",
    port: 5432,
    database: "neondb",
    ssl: true,
  });

  try {
    await client.connect();
    const result = await client.query(obj);
    return result;
  } catch (e) {
    console.error("Database error:", e);
    throw e; // Re-throw to handle in the API route
  } finally {
    await client.end();
  }
};
