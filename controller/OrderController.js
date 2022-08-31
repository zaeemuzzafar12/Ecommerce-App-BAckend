const Order = require("../models/OrderModel")
const Product = require("../models/ProductsModel")

//create orders api start here
const AddOrders = async (req,res) => {
    try{
    const addorder = new Order (req.body);
    const orders = await addorder.save();
    res.send({
        message:"Your Order placed Successfully",
        status:200,
        data:orders
    })
    }catch(err){
        res.send({
            message:"Your Order Not placed",
            status:404
        })
    }
}
//create orders api end here
const GetSpecificUserOrder =  async (req,res) => {
    try{
        const UsersOrders = await Order
        .find({userId : req.params.userId  })
        .populate( 'userId')
        .populate({path:'products.productsId',
            populate:{path:'categories'}})

        res.send({
            total:UsersOrders.length,
            message:"Order Fetch Successfully",
            status:200,
            data:UsersOrders
        })

    }catch(err){
        res.send({
            message:"Order Not Yet",
            status:404
        })
    }
}
const AllOrders = async (req,res) => {
    const limit = req.query.limit;
    const offset = req.query.offset;
    const skip = (offset - 1) * limit;
    try{
        const alldata = await Order
        .find().populate('userId')
        .populate('products.productsId').limit(limit).skip(skip)
        res.send({
            message:"All Orders Fetch Successfully",
            status:200,
            data:alldata
        })
    }catch(err){
        res.send({
            message:"Orders Not Fetch",
            status:404
        })
    }

}
const DeleteOrders = async (req,res) => {
    const ids = req.params.id;
    try{
        const DeleteOrders =
         await Order.findByIdAndDelete(ids);
         res.send({
            message:"Order Deleted Successfully",
            status:200,
            data:DeleteOrders
         })
    }catch(err){
        res.send({
            message:"Order Not Deleted",
            status:404
         })
    }
}
const StatusChange = async (req,res) => {
    const ids = req.params.id;
    try{
        const statusChanged = await Order.findByIdAndUpdate(
            ids,
            { status: req.body.status},
            {new:true}
        )
        res.send({
            message:"Order Status Changed",
            status:200,
            data:statusChanged
        })
    }catch(err){
        res.send({
            message:"Order Status Not Changed",
            status:404
        })
    }
}
const UpdateOrders  = async (req,res) => {
    const orderIds = req.params.id;
    try{
         const UpdatedOrder =
          await Order.findByIdAndUpdate(
            orderIds,
            { $set: req.body },
            {new : true}
          )
          res.send({
            message:"Order Updated Successfully",
            status:200,
            data:UpdatedOrder
          })
    }catch(err){
        res.send({
            message:"Order Failed while upadating",
            status:404
          })
    }
}

module.exports = {
    AddOrders,
    GetSpecificUserOrder,
    AllOrders,
    DeleteOrders,
    StatusChange,
    UpdateOrders
}