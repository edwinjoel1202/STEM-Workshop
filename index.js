const express = require("express");
const authRoutes = require("./routers/authRoutes");
const moviesRoutes = require("./routers/moviesRoutes");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();

app.use(express.json());
app.use("/", authRoutes);
app.use("/movies", moviesRoutes);


  mongoose
  .connect("mongodb://localhost:27017/MovieBuffet")
  .then(() => {
    console.log("Database connection successful");
  });

app.listen(process.env.PORT, () => {
  console.log(`App is listening at port ${process.env.PORT}`);
});
