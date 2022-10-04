import jsonwebtoken from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;
  jsonwebtoken.verify(token, process.env.TOKEN_SECRET, function (err, decoded) {
    if (err) {
      return res.send(401);
    }
    console.log(decoded);
    next();
  });
};
