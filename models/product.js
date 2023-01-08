import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: String,
  imgs: [String],
  quantity: Number,
  price: Number,
  desc: String,
  colors: [String],
  sizes: [String],
});

const Product = new mongoose.model("Product", productSchema);
export default Product;