const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    name:{
             type:String ,
            required:true ,
            unique:true 
            },
    image: { 
            type:String , 
            required:true, 
            unique:true
            }
},
{ timestamps : true}
);

module.exports = mongoose.model("Slider",SliderSchema)