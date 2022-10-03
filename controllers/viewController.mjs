import fs from "fs";

export const sendFrontPage = async (req, res) => {
  try {
    let indexPage = fs.readFileSync("./views/index.html", "utf-8");
    res.send(indexPage);
  } catch (err) {
    console.log(err);
  }
};
