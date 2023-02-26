const express = require("express");
const authRouter = express.Router();

const { signup, signin } = require("../Actions/AuthController");

authRouter.post("/signup", signup);

authRouter.post("/login", signin);

module.exports = authRouter;
