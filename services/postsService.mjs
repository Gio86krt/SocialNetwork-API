import { pool } from "../database/connection.mjs";

export const writePost = (author, content, id) => {
  return new Promise(async (resolve, reject) => {
    const sql = "INSERT INTO posts VALUES(?,?,?,NOW());";

    await pool.query(sql, [id, author, content], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
