const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Enter the name of quantity"],
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  { timestamps: true } // Correct option for enabling timestamps
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
