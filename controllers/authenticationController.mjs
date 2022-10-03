import { pool } from "../database/connection.mjs";

export const getUserByUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT guid, username, password FROM users WHERE username = ?;";
    await pool.query(sql, [username], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result[0]);
      }
    });
  });
};

export const addUser = (guid, username, password, token) => {
  return new Promise(async (resolve, reject) => {
    const sql = "INSERT INTO users VALUES(?,?,?,?)";
    await pool.query(sql, [guid, username, password, token], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

export const updateUserToken = async (guid, token) => {
  return new Promise(async (resolve, reject) => {
    const sql = "UPDATE users SET token = ? WHERE guid = ?;";
    pool.query(sql, [token, guid], (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(true);
      }
    });
  });
};


export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT guid, username, password FROM users WHERE username = ?;";

    await pool.query(sql, [], (err, result) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};
