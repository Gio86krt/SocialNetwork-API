import { addUser } from "../controllers/authenticationController.mjs";
import { hashPassword } from "../utils/hash.mjs";
import { randomUUID } from "crypto";
import { generateToken } from "../utils/generateToken.mjs";

export const register = async (req, res) => {
  let { username, password, retypePassword } = req.body;

  if (password !== retypePassword) throw new Error("Passwords do not match");

  //sanitize inputs
  username = username.replace(/[<>\\'"`]/gi, "");
  password = password.replace(/[<>\\'"`]/gi, "");
  retypePassword = retypePassword.replace(/[<>\\'"`]/gi, "");

  //hash password
  const hash = await hashPassword(password);
  const userGuid = randomUUID();
  const token = await generateToken(userGuid);

  //store values
  addUser(userGuid, username, hash, token);
  res.send("registered");
};

export const login = (req, res) => {
  const { username, password } = req.body;

  //get passsword from db

  //check password hashes

  //if correct give token

  res.send("logged in");
};
