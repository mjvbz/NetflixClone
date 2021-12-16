const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("Database Connected Succesfully!"))
.catch((err) => {
  console.error('Database Connection Failed Due to :'+ err);
});

app.listen(8800, () => {
  console.log("Backend server is running succesfully!");
});
