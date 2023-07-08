const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const connectToMongo = require("./db");

dotenv.config();

connectToMongo();

app.listen(7007, () => {
  console.log("Backend server is Running !");
});
