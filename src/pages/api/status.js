import { query } from "../../../database"; // Adjust path as needed

export default async function getStatus(req, res) {
  try {
    const versionResult = await query("SHOW server_version;"); // <---AQUI
    console.log("PostgreSQL version:", versionResult.rows[0]);

    res.status(200).json({
      status: 100,
      dbVersion: versionResult.rows[0],
    });
  } catch (error) {
    console.error("API error:", error);
    res.status(500).json({
      status: 500,
      error: "Database connection failed",
    });
  }
}
