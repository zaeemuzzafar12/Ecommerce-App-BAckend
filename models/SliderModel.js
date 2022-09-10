const mongoose = require('mongoose');

const SliderSchema = new mongoose.Schema({
    name:{
             type:String ,
            required:true ,
          
        },
    image: { 
            type:String , 
            required:true,
            },
        desc:{
                type:String,
                required:true
        },
        status:{
               type:Boolean,
               default:false 
        }
},
{ timestamps : true}
);

module.exports = mongoose.model("Slider",SliderSchema)