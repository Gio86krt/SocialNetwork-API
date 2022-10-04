import { pool } from "../database/connection.mjs";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const loginUser = (username, password) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT guid, username, password, token FROM users WHERE username = ?;";
    await pool.query(sql, [username], (err, result) => {
      if (err) {
        reject(err);
      } else {
        const verify = bcrypt.compareSync(password, result[0].password);
        if (verify)
          resolve({
            username: result[0].username,
            guid: result[0].guid,
            token: result[0].token,
          });
        else reject(false);
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

export const getUserByUsername = (username) => {
  return new Promise(async (resolve, reject) => {
    const sql = "SELECT guid, username FROM users WHERE username = ?;";

    await pool.query(sql, [username], (err, result) => {
      if (err) reject(err);
      else resolve(result[0]);
    });
  });
};
