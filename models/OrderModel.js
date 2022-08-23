const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User'
    },
    products: [
      {
        productsId: {
          type: mongoose.Schema.Types.ObjectId,
          ref:'Product'
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
