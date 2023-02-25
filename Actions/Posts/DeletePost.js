const mongoose = require("mongoose");
const Post = require("../../model/post");

async function deletePost(req, res) {
  const authorName = req.body.author;
  const many = req.body.many || false;
  if (many) {
    Post.deleteMany({ author: authorName }, (err, result) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: "Could not delete posts" });
      } else if (result.deletedCount > 0) {
        res.json({
          message: `Deleted ${result.deletedCount} posts by author ${authorName}`,
        });
      } else {
        res
          .status(404)
          .json({ error: `No posts found by author ${authorName}` });
      }
    });
  } else {
    Post.findOneAndDelete({ author: authorName }, (err, deletedPost) => {
      if (err) {
        console.error(err);
      } else if (deletedPost) {
        res.json({
          message: `Deleted post with title ${deletedPost.title}`,
        });
      } else {
        res
          .status(404)
          .json({ error: `No posts found by author ${authorName}` });
      }
    });
  }
}
module.exports = deletePost;
