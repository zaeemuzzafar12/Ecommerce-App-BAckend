const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
      required: true,
    },
    categories: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
    },
    size: {
      type: String,
    },
    color: {
        type: String
    },
    price: {
      type: Number,
    },
    status:{
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
