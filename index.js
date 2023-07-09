const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const connectToMongo = require("./db");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

connectToMongo();

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/users",userRoute);
app.use("/api/auth",authRoute);

app.listen(7007, () => {
  console.log("Backend server is Running !");
});
