import mongoose from "mongoose";
import Product from "../models/product.js";
import User from "../models/user.js";

export function getAllItems(req, res) {
  Product.find().then((items) => res.status(200).json(items));
}

export function findById(req, res) {
  Product.find({ _id: mongoose.Types.ObjectId(req.query.pid) }).then((item) =>
    res.status(200).json(item)
  );
}

export function create(req, res) {
  const { name, img, quantity, price, colors, sizes } = req.body;
  const total = price * quantity;
  const product = new Product({
    name,
    img,
    quantity,
    price,
    total,
    colors,
    sizes,
  });
  product.save().then(() => {
    Product.find().then((data) => {
      res.status(200).json(data);
    });
  });
}

export async function add_card(req, res) {
  const newItem = await Product.create(req.body);
  const current_user = await User.find({
    _id: mongoose.Types.ObjectId(req.query.uid),
  });
  current_user.cart.push(newItem._id);
  await current_user.save();
  const { cart } = await current_user.populate("Product");
  res.status(200).json(cart);
}