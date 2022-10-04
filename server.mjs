import express from "express";
import bodyParser from "body-parser";
import { login, register } from "./services/usersService.mjs";
import {
  deleteOne,
  read,
  readOne,
  update,
  write,
} from "./services/postsService.mjs";
import {
  commentEdit,
  commentRemove,
  commentWrite,
} from "./services/commentsService.mjs";

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.post("/login", login);
app.post("/register", register);
app.post("/write", write);

app.post("/comment/write", commentWrite);

app.delete("/comment/remove", commentRemove);
app.delete("/delete", deleteOne);

app.patch("/comment/edit", commentEdit);
app.patch("/update", update);

app.get("/", read);
app.get("/readOne", readOne);

app.get("*", (req, res) => {
  res.send("404");
});

app.listen(PORT, () => {
  console.log("Server is running on port:", PORT);
});
