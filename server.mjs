import express from "express";
import { login, register } from "./controllers/authenticationController.mjs";
import { writeComment } from "./controllers/commentsController.mjs";
import {
  deletePost,
  readAll,
  readOne,
  updatePost,
  writePost,
} from "./controllers/postsController.mjs";
import { sendFrontPage } from "./controllers/viewController.mjs";

const app = express();
const PORT = 3000;

app.post("/writePost", writePost);
app.post("/writeComment", writeComment);
app.post("/login", login);
app.post("/register", register);

app.delete("/delete", deletePost);

app.patch("/update", updatePost);

app.get("/", sendFrontPage);
app.get("/readAll", readAll);
app.get("/readOne", readOne);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
