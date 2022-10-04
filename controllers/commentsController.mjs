import { pool } from "../database/connection.mjs";

export const writeComment = (commentId, author, comment, postId) => {
  return new Promise(async (resolve, reject) => {
    let sql = "INSERT INTO comments VALUES (?,?,?,?,NOW())";

    await pool.query(
      sql,
      [commentId, author, comment, postId],
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );
  });
};

export const removeComment = (commentId) => {
  return new Promise(async (resolve, reject) => {
    let sql = "DELETE FROM comments WHERE guid = ?";

    await pool.query(sql, [commentId], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const editComment = (comment, guid) => {
  return new Promise(async (resolve, reject) => {
    let sql = "UPDATE comments SET content = ? WHERE guid = ? ";

    await pool.query(sql, [comment, guid], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const readComments = (postId = null) => {
  return new Promise(async (resolve, reject) => {
    let sql = "";
    if (postId)
      sql = "SELECT guid, author, content, post FROM comments WHERE post = ?";
    else sql = "SELECT guid, author, content, post FROM comments";
    await pool.query(sql, [postId], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
