const Category = require('../models/CategoryModel')

//Create Category Api start here
const AddCategory = async (req,res) => {
    try{
        const addcat = new Category ({
            name: req.body.name,
            image: req.body.image
        })

        const savedCategory = await addcat.save();
        res.send({
            message:"Category Added Successfully",
            status:200,
            data:savedCategory
        })
    }catch(err){
        res.send({
            message:"Category Not Added",
            status:404,
        })
    }
}
//Create Category Api end here

//Get All Category Api start here
const GetAllCategory = async (req,res) => {
try{
    const alldata = await Category.find();
    res.send({
        total:alldata.length,
        message:"All Catgeories Fetch Successfully",
        status:200,
        data:alldata
    })

}catch(err){
    res.send({
        message:"Categories Not Found",
        status:404
    })
}
}
//Get All Category Api end here

//Get Single Category  Api start here
const SingleCategoryById = async (req,res) => {
    const query = req.params.id
    try{
        const singlerecord = await Category.findById(query)
        res.send({
            message:"Data Fetch Successfully",
            status:200,
            data:singlerecord
        })
    }catch(err){
        res.send({
            message:"Data Not Found",
            status:404
        })
    }
}
//Get Single Category  Api end here

//Update Category Api start here
const UpdateCategory = async (req,res) => {
    const query = req.params.id
try{
    const updateCat = await Category.findByIdAndUpdate(
        query ,
        {$set : req.body } ,
        {new : true}
    )
    res.send({
        message:"Category Update Successfully",
        status:201,
        data:updateCat
    })
}catch(err){
    res.send({
        message:"Category Not Update",
        status:404
    })
}
}
//Update Category Api end here

// Delete Category Api start here
const DeleteCategory = async (req,res) => {
    const query = req.params.id;
    try{
        const DeleteCategory = await Category.findByIdAndDelete(query);
        res.send({
            message:"Category Delete Successfully",
            status:200,
            data:DeleteCategory
        })

    }catch(err){
        res.send({
            message:"Category Not Delete",
            status:404,
        })
    }
}
// Delete Category Api end here

module.exports = { 
    AddCategory,
    GetAllCategory,
    SingleCategoryById,
    UpdateCategory,
    DeleteCategory
}