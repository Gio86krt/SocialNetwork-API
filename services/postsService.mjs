import { randomUUID } from "crypto";
import {
  writePost,
  updatePost,
  getPost,
  deletePost,
  getPosts,
} from "../controllers/postsController.mjs";
import { getUserByUsername } from "../controllers/authenticationController.mjs";
import { cleanInput } from "../utils/cleanInputs.mjs";
import { readComments } from "../controllers/commentsController.mjs";

export const readOne = async (req, res) => {
  let postId = req.query.postId;

  postId = cleanInput(postId);

  try {
    const post = await getPost(postId);
    const comments = await readComments(postId);
    if (!post) {
      res.end("Something went wrong.");
    }

    res.send({ post, comments });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const write = async (req, res) => {
  let { author, content } = req.body;

  if (!author || !content) res.end();

  author = cleanInput(author);
  content = cleanInput(content);

  const id = randomUUID();
  try {
    const user = await getUserByUsername(author);
    if (!user) res.end("Something went wrong.");

    const result = await writePost(user[0].guid, content, id);
    if (result.affectedRows !== 1) res.end("Something went wrong.");
    else res.send({ write: true, id });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const update = async (req, res) => {
  let postId = req.query.postId;
  let { content } = req.body;

  try {
    // ///check user identity   ---> TO DO
    // const postData = await getPost(postId);
    // console.log(postData);
    postId = cleanInput(postId);
    content = cleanInput(content);

    const update = await updatePost(content, postId);
    if (update.affectedRows !== 1) {
      res.end("Something went wrong.");
    }
    res.send({ updated: true });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const deleteOne = async (req, res) => {
  let postId = req.query.postId;

  postId = cleanInput(postId);
  try {
    const result = await deletePost(postId);

    if (result.affectedRows !== 1) {
      res.end("Something went wrong.");
    }

    res.send({ deleted: true });
  } catch (err) {
    res.end("Something went wrong.");
  }
};

export const read = async (req, res) => {
  try {
    const posts = await getPosts();
    const comments = await readComments();

    res.send({ posts, comments });
  } catch (err) {
    res.end("Something went wrong.");
  }
};
