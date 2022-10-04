import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateToken = (guid) => {
  return new Promise(async (resolve, reject) => {
    const token = await jsonwebtoken.sign({ guid }, process.env.TOKEN_SECRET);

    if (!token) reject();
    else resolve(token);
  });
};
