const Cart = require('../models/CartModel');

const CreateCarts = async (req,res,next) => {
try{
    const cartdata = new Cart(req.body)
    const cart = await cartdata.save();
    res.send({
        message:"Products Selected Successfully",
        status:200,
        data:cart,
        next
    })

}catch(err){
    res.send({
        message:"Product Not Selected",
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
const GetCart = async () => {
    const userId = req.params.id
    try{
        const alldata = await Cart.findById(userId)
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
module.exports = {
    CreateCarts,
    DeleteCart,
    GetCart
}