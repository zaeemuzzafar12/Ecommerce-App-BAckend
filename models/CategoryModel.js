const mongoose = require('mongoose');

const CategorySchema = mongoose.Schema({
    name:{
        type:String,
        required : true,
        unique: true
    },
    image:{
        type:String,
        required:true
    }
},
{timestamps : true}
)

module.exports = mongoose.model("Category",CategorySchema)