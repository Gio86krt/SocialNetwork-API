import fs from "fs";
import { pool } from "../database/connection.mjs";
import { randomUUID } from "crypto";

export const readOne = (req, res) => {
  const postId = req.query.postId;

  res.send();
};

export const writePost = (req, res) => {
  const { author, content } = req.body;

  const id = randomUUID();

  try {
    res.send({ write: true, id });
  } catch (err) {
    console.log(err);
    res.end(err);
  }
};

export const updatePost = (req, res) => {
  const postId = req.query.postId;
  const { content } = req.body;

  try {
    res.send({ updated: true });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (req, res) => {
  const postId = req.query.postId;

  try {
    res.send({ deleted: true });
  } catch (err) {
    console.log(err);
  }
};

export const getPosts = (req, res) => {
  return new Promise(async (resolve, reject) => {
    const sql =
      "SELECT users.username, content FROM tweets join users on users.guid = author";
    await pool.query(sql, [], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};
