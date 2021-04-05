require("dotenv").config();

const productsData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productsData);
    console.log("data import SUCCESS");

    process.exit();
  } catch {
    console.error("ERRROR with data import ");
    process.exit(1);
  }
};


importData();