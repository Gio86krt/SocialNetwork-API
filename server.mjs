import express from "express";
import bodyParser from "body-parser";
import { login, register } from "./services/usersService.mjs";
import { writeComment } from "./controllers/commentsController.mjs";
import {
  deletePost,
  readOne,
  updatePost,
  writePost,
} from "./controllers/postsController.mjs";
import { sendFrontPage } from "./controllers/viewController.mjs";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/login", login);
app.post("/register", register);
app.post("/writePost", writePost);
app.post("/writeComment", writeComment);

app.delete("/delete", deletePost);

app.patch("/update", updatePost);

app.get("/", sendFrontPage);
app.get("/readOne", readOne);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
