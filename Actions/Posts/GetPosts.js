const mongoose = require("mongoose");
const Post = require("../../model/post");

async function GetPost(req, res) {
  Post.find((err, posts) => {
    if (err) {
      console.error(err);
      res.status(404).send("Error retrieving posts");
    } else {
      res.json(posts);
    }
  });
}
module.exports = GetPost;
