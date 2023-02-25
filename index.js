const express = require("express");
const app = express();
const dbConnection = require("./DbConnection");
const Post = require("./model/post");
const bodyParser = require("body-parser");

//actions
const AddPost = require("./Actions/Posts/AddPost");
const deletePost = require("./Actions/Posts/DeletePost");
const GetPost = require("./Actions/Posts/getPosts");

require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Hello, world!");
});

app.post("/post", (req, res) => {
  AddPost(req, res);
});

app.get("/post", (req, res) => {
  GetPost(req, res);
});

app.delete("/post", (req, res) => {
  deletePost(req, res);
});

dbConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
