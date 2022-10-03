import { pool } from "../database/connection.mjs";

export const register = (req, res) => {
  console.log("register");
  const { username, password } = req.body;

  res.send("registered");
};

export const login = (req, res) => {
  console.log("login");
  const { username, password } = req.body;
  const users = getUsers;
  console.log(users);
  res.send("logged in");
};
