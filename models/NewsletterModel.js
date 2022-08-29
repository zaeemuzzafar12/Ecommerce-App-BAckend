const mongoose = require('mongoose');

const NewsletterSchema = new mongoose.Schema({
    emailTo:{
             type:String
          
            },
    message: { 
            type:String
            },
        desc:{
                type:String
        }
},
{ timestamps : true}
);

module.exports = mongoose.model("Newsletter",NewsletterSchema)