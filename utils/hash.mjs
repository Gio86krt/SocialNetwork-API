import bcrypt from "bcrypt";

export const hashPassword = (password) => {
  const salt = 5;
  return new Promise((resolve, reject) => {
    return bcrypt.hash(password, salt, function (err, hash) {
      if (err) reject(err);
      else resolve(hash);
    });
  });
};
