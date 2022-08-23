const Cart = require('../models/CartModel');

const CreateCarts = async (req,res,next) => {
try{
    const cartdata = new Cart(req.body)
    const cart = await cartdata.save();
    res.send({
        message:"Products Selected Successfully",
        status:200,
        data:cart
    })

}catch(err){
    res.send({
        message:"Cart is Empty",
        status:404,
      
    })
}

}
const DeleteCart = async (req,res) => {
    const userid = req.params.id;
    try{
        const DeleteProducts = await Cart.findByIdAndDelete(userid)
        res.send({
            message:"Cart Items Deleted Successfully",
            status:200,
            data:DeleteProducts
        })
    }catch(err){
        res.send({
            message:"Cart Items Not Deleted",
            status:404
        })
}
}
const GetCart = async (req,res) => {
    const userId = req.params.userId;
    try{
        const alldata = await Cart.findOne({userId: userId})
        console.log(alldata)
        res.send({
            total:alldata.length,
            message:"Cart Data Fetch Successfully",
            status:200,
            data:alldata
        })
    }catch(err){
        res.send({
            message:"Cart Data Not Fetch",
            status:404
        })
    }
}
const UpdateCart = async (req,res) => {
    const id = req.params.id;
    console.log(id)
    try{
        const updateProducts = await Cart.findByIdAndUpdate(
            id,
            { $set : req.body } ,
            {new:true}
        )
        res.send({
            message:"Cart Updated Successfully",
            status:201,
            data:updateProducts
        })

    }catch(err){
        res.send({
            message:"Cart Not Updated",
            status:404
        })
    }
}

module.exports = {
    CreateCarts,
    DeleteCart,
    GetCart,
    UpdateCart
}