import { randomUUID } from "crypto";
import {
  writePost,
  updatePost,
  getPost,
  deletePost,
} from "../controllers/postsController.mjs";
import { getUserByUsername } from "../controllers/authenticationController.mjs";

export const readOne = async (req, res) => {
  const postId = req.query.postId;

  try {
    const post = await getPost(postId);
    if (!post) {
      res.end("Something went wrong.");
    }

    res.send(post);
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const write = async (req, res) => {
  const { author, content } = req.body;

  if (!author || !content) res.end();
  const id = randomUUID();
  try {
    const user = await getUserByUsername(author);
    if (!user) res.end("Something went wrong.");

    const result = await writePost(user.guid, content, id);
    if (result.affectedRows !== 1) res.end("Something went wrong.");
    else res.send({ write: true, id });
  } catch (err) {
    res.end(err);
  }
};

export const update = async (req, res) => {
  const postId = req.query.postId;
  const { content } = req.body;

  try {
    // ///check user identity   ---> TO DO
    // const postData = await getPost(postId);
    // console.log(postData);

    const update = await updatePost(content, postId);
    if (update.affectedRows !== 1) {
      res.end("Something went wrong.");
    }
    res.send({ updated: true });
  } catch (err) {
    console.log(err);
  }
};

export const deleteOne = async (req, res) => {
  const postId = req.query.postId;
  try {
    const result = await deletePost(postId);

    if (result.affectedRows !== 1) {
      res.end("Something went wrong.");
    }

    res.send({ deleted: true });
  } catch (err) {
    console.log(err);
  }
};
