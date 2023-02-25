const mongoose = require("mongoose");
const Post = require("../../model/post");

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
module.exports = AddPost;
