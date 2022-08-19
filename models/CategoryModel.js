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
    },
    status:{
        type:Boolean,
        default:false
    }
},
{timestamps : true}
)

module.exports = mongoose.model("Category",CategorySchema)