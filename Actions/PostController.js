const mongoose = require("mongoose");
const Post = require("../model/postModel");

async function AddPost(req, res) {
  const newPost = new Post({
    title: req.body.title,
    content: req.body.content,
    author: req.body.author,
  });

  // Save the post to the database
  newPost.save((err, post) => {
    if (err) {
      console.error(err);
      res.status(403).send("error: " + err.message);
    } else {
      res.send("successful");
    }
  });
}

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

async function GetPost(req, res) {
  Post.find((err, posts) => {
    if (err) {
      console.error(err);
      res.status(404).send("Error retrieving posts");
    } else {
      console.log(req.randomId);
      res.json(posts);
    }
  });
}

module.exports = {
  AddPost,
  deletePost,
  GetPost,
};
