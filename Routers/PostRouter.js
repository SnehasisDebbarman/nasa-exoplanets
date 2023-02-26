const express = require("express");
const postRouter = express.Router();

const auth = require("../middleware/auth");

const { AddPost, deletePost, GetPost } = require("../Actions/PostController");

postRouter.post("/", auth, AddPost);

postRouter.get("/", auth, GetPost);

postRouter.delete("/", auth, deletePost);

module.exports = postRouter;
