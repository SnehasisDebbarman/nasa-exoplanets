const express = require("express");
const app = express();

const dbConnection = require("./DbConnection");
const PostRouter = require("./Routers/PostRouter");
const authRouter = require("./Routers/AuthRouter");

const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
app.use(cors());

app.use(express.json());
app.use("/post", PostRouter);
app.use("/", authRouter);

// app.get("/", (req, res) => {
//   res.json("Hello, world!");
// });

dbConnection();

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
