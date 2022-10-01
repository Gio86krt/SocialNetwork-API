import fs from "fs";

export const sendFrontPage = async (req, res) => {
  try {
    let indexPage = fs.readFileSync("./views/index.html", "utf-8");
    const posts = JSON.parse(
      fs.readFileSync("./dummy_database/dummy_data.json", "utf-8")
    );
    const keys = Object.keys(posts);

    const newData = keys
      .map(
        (key) => `
        <div class="container">
            <div class="row">
                <div class="col-6">
                    From: ${posts[key].author}
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    Message: ${posts[key].content}
                </div>
            </div>
        </div>
    `
      )
      .join("");

    fs.writeFileSync(indexPage, newData, "utf-8");

    res.send(indexPage);
  } catch (err) {
    console.log(err);
  }
};
