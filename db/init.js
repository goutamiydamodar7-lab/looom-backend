import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { pool } from "../src/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initDatabase() {
  try {
    const schemaPath = path.join(__dirname, "../db/schema.sql");

    console.log("Path:", schemaPath);

    const sql = fs.readFileSync(schemaPath, "utf-8");

    await pool.query(sql);

    console.log("Database schema initialized");
  } catch (err) {
    console.error("Database Initialization failed:", err);
  }
}
