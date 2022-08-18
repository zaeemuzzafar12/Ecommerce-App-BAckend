const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true,
    },
    products: [
      {
        productsId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
    amount:{
        type: Number
    },
    address:{
        type:String,
        required: true
    },
    status:{
        type:String,
        default: "pending"
    }

  },
  { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);
