import { pool } from "../database/connection.mjs";

export const getPosts = () => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT posts.guid, users.username, posts.content FROM posts JOIN users ON users.guid = author";
    await pool.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const writePost = (author, content, id) => {
  return new Promise(async (resolve, reject) => {
    const sql = "INSERT INTO posts VALUES(?,?,?,NOW());";

    await pool.query(sql, [id, author, content], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const updatePost = (content, id) => {
  return new Promise(async (resolve, reject) => {
    const sql = "UPDATE posts SET content = ? where guid = ?";
    console.log(content, id);
    await pool.query(sql, [content, id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const getPost = (id) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT posts.guid, posts.author, posts.content, users.username FROM posts JOIN users ON posts.author = users.guid where posts.guid = ?";

    await pool.query(sql, [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

export const deletePost = (id) => {
  return new Promise(async (resolve, reject) => {
    const sql = "DELETE FROM posts WHERE guid = ?";
    await pool.query(sql, [id], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
