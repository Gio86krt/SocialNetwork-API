import {
  addUser,
  getUserByUsername,
  loginUser,
  updateUserToken,
} from "../controllers/authenticationController.mjs";
import { hashPassword } from "../utils/hash.mjs";
import { randomUUID } from "crypto";
import { generateToken } from "../utils/generateToken.mjs";
import { verifyToken } from "../utils/verifyToken.mjs";
import { cleanInput } from "../utils/cleanInputs.mjs";

export const register = async (req, res) => {
  let { username, password, retypePassword } = req.body;

  if (password !== retypePassword) {
    res.end("Passwords do not match");
    return;
  }

  //sanitize inputs
  username = await cleanInput(username);
  password = await cleanInput(password);
  retypePassword = await cleanInput(retypePassword);

  try {
    const checkDoubles = await getUserByUsername(username);
    if (checkDoubles.length !== 0) {
      res.end("Username already exists.");
      return;
    }

    //hash password
    const hash = await hashPassword(password);
    const userGuid = randomUUID();
    const token = await generateToken(userGuid);

    //store values
    const result = await addUser(userGuid, username, hash, token);

    if (result.affectedRows !== 1) {
      res.end({ registered: false });
      return;
    }
    res.send({ registered: true });
    return;
  } catch (err) {
    res.end(err);
    return;
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    //get passsword from db
    const userData = await loginUser(username, password);
    if (!userData) throw new Error("Incorrect username or password.");
    //if correct give token
    // if (!userData.token) {
    let token = await generateToken(userData.guid);
    // } else {
    //   console.log("TOKEN 2");
    // }
    // const verify = verifyToken();
    const update = await updateUserToken(token);

    res.send("logged in");
  } catch (err) {
    console.log(err);
  }
};
