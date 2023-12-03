import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  detailUrl: String,
  title: Object,
  price: Object,
  categories: String,
  quantity: Number,
  description: String,
  discount: String
});

const Product = mongoose.model("product", productSchema);

export default Product;
