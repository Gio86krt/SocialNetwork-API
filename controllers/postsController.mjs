export const readAll = (req, res) => {
  console.log("readall");
  res.send("readallterst");
};

export const readOne = (req, res) => {
  const postId = req.query.postId;
  console.log("readone", postId);
  res.send("readone");
};

export const writePost = (req, res) => {
  console.log("writepost");
  res.send("writepost");
};

export const updatePost = (req, res) => {
  const postId = req.query.postId;
  console.log("update", postId);
  res.send("update");
};

export const deletePost = (req, res) => {
  const postId = req.query.postId;
  console.log("delete", postId);
  res.send("delete");
};
