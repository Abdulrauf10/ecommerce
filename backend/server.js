require("dotenv").config();
const express = require ("express");
const {PORT= 8000} = process.env;
const connectDB = require ("./config/db.js");
const productRoutes = require ("./routes/productRoutes");

connectDB();

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes)

app.listen(PORT, () => {
  console.log(`servers is running on port ${PORT}`)
})