import fs from "fs";

export const sendPosts = (req, res) => {
  const posts = JSON.parse(
    fs.readFileSync("./dummy_database/dummy_data.json", "utf-8")
  );

  res.json(posts);
};
