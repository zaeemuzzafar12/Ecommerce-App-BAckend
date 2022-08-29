const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    emailTo:{
             type:String ,
            required:true ,
          
            },
    message: { 
            type:String , 
            required:true,
            },
        desc:{
                type:String,
                required:true
        }
},
{ timestamps : true}
);

module.exports = mongoose.model("Newsletter",NewsletterSchema)