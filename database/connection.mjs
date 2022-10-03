import mysql from "mysql";
import dotenv from "dotenv";

dotenv.config();

console.log(process.env.DB_HOST);

export const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  //ssl: process.env.SSL ? { ca: process.env.SSL } : null,
});

pool.getConnection((err, connection) => {
  if (err) throw err;
  console.log("Database connected successfully");
  connection.release();
});

