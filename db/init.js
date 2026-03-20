import fs from "fs";
import path from "path";
import { pool } from "../src/db.js";

export async function initDatabase() {
  try {
    const schemaPath = path.join(process.cwd(), "db", "schema.sql");

    console.log("Schema Path:", schemaPath); // debug

    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);

    console.log("Database schema initialized");
  } catch (err) {
    console.error("Database Initialization failed:", err);
  }
}
