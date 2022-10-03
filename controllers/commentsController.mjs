import { pool } from "../database/connection.mjs";

export const writeComment = (req, res) => {
  console.log("writecomment");
  res.send("writecomment");
};
