require("dotenv").config();
const express = require ("express");
const {PORT= 8000} = process.env;
const connectDB = require ("./config/db.js");

connectDB();

const app = express();

app.listen(PORT, () => {
  console.log(`servers is running on port ${PORT}`)
})