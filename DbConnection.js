const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
module.exports = async function dbConnection() {
  //   const password = encodeURIComponent("freelance@2023");
  //   const uri = `mongodb+srv://freelance2023:${password}@cluster0.acrslyx.mongodb.net/?retryWrites=true&w=majority`;
  const mongoURI = process.env.MONGODB_URI;

  try {
    await mongoose.connect(mongoURI);
    console.log("connected");
  } catch (error) {
    console.error(error);
  }
};
