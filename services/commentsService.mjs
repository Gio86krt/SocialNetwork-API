import { randomUUID } from "crypto";
import { getUserByUsername } from "../controllers/authenticationController.mjs";
import {
  writeComment,
  editComment,
  removeComment,
} from "../controllers/commentsController.mjs";
import { cleanInput } from "../utils/cleanInputs.mjs";

export const commentWrite = async (req, res) => {
  let { author, comment, post } = req.body;

  author = cleanInput(author);
  comment = cleanInput(comment);
  post = cleanInput(post);

  try {
    const user = await getUserByUsername(author);

    const commentGuid = randomUUID();
    const result = await writeComment(commentGuid, user[0].guid, comment, post);

    if (result.affectedRows !== 1) {
      res.end("Something went wrong.");
    }

    res.send({ write: true });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const commentEdit = async (req, res) => {
  let { comment, commentId } = req.body;

  comment = cleanInput(comment);
  commentId = cleanInput(commentId);

  try {
    const result = await editComment(comment, commentId);

    if (result.affectedRows !== 1) {
      res.end("Something went wrong.");
    }

    res.send({ edit: true });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const commentRemove = async (req, res) => {
  let { commentId } = req.body;

  commentId = cleanInput(commentId);

  try {
    const result = await removeComment(commentId);

    if (result.affectedRows !== 1) {
      res.end("Something went wrong.");
    }

    res.send({ deleted: true });
  } catch (err) {
    res.end("Something went wrong.");
  }
};
