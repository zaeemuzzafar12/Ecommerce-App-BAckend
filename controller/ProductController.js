const Product = require('../models/ProductsModel')

const AddProducts = async (req,res) => {
    try{
        const addpro = new Product ({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image,
            categories: req.body.categories,
            size: req.body.size,
            color: req.body.color,
            price: req.body.price,
        })

        const savedProducts = await addpro.save();
        res.send({
            message:"Products Added Successfully",
            status:200,
            data:savedProducts
        })
    }catch(err){
        res.send({
            message:"Products Not Added",
            status:404,
        })
    }
}

const GetAllProducts = async (req,res) => {
    try{
        const alldata = await Product.find()
        res.send({
            total:alldata.length,
            message:"All Products Fetch Successfully",
            status:200,
            data:alldata
        })
    }catch(err){
        res.send({
            message:"Products Not Fetch",
            status:404
        })
    }

}
const GetSingleProducts = async (req,res) => {
    const ids = req.params.id;
    try{
        const sp = await Product.findById(ids);
        res.send({
            message:"Product Data Fetch Successfully",
            status:200,
            data:sp
        })
    }catch(err){
        res.send({
            message:"Product Not Found",
            status:404
        })
    }
}
const UpdateProducts = async (req,res) => {
    const paramsids = req.params.id;
    try{
        const updateProducts = await Product.findByIdAndUpdate(
            paramsids,
            { $set : req.body } ,
            {new:true}
        )

        res.send({
            message:"Products Updated Successfully",
            status:201,
            data:updateProducts
        })

    }catch(err){
        res.send({
            message:"Products Not Updated",
            status:404
        })
    }
}
const DeleteProducts = async(req,res) => {
    const ids = req.params.id;
    try{
        const DeleteProducts = await Product.findByIdAndDelete(ids)
        res.send({
            message:"Products Deleted Successfully",
            status:200,
            data:DeleteProducts
        })
    }catch(err){
        res.send({
            message:"Products Not Deleted",
            status:404
        })
    }
}
const ProductsStatus = async (req,res) => {
const ids = req.params.id;
try{
    const prostatus = await Product.findByIdAndUpdate(
        ids ,{
            status: req.body.status
        },
        {new : true}
    )
    res.send({
        message:"Status Changed Successfully",
        status:201,
        data:prostatus
    })
}catch(err){
    res.send({
        message:"Status Not Changed",
        status:404
    })
}
}

module.exports = { 
    AddProducts ,
    GetAllProducts,
    GetSingleProducts,
    UpdateProducts,
    DeleteProducts,
    ProductsStatus
}