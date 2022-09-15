const Newsletter = require('../models/NewsletterModel');
var nodemailer = require('nodemailer')
const ForSubscription = async (req,res) => {
try{
    const subscribed = Newsletter({
        emailTo : req.body.emailTo,
        message : req.body.message,
        desc: req.body.desc
    })
    
    const email = await subscribed.save();
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.USER ,
          pass: process.env.PASS
        },
      });
    
      let options = await transporter.sendMail({
        from : process.env.USER,
        to : email.emailTo,
        subject: email.message || "NewsLetter Subscribed Successfully",
        text: email.desc || "Email Testing Completed"
      })
      transporter.sendMail(options , (err,info) => {
        if(err){ 
            res.send({
                message:"NewsLetter Not Subscribed",
                status:404
        })
        }else{
            console.log("info",email,info)
            res.send({
                message:"NewsLetter Subscribed Successfully",
                status:200,
                data:info.response
            })
        }
      })
console.log(email,info)
   
} catch(err){
    console.log("Email not Subscribed")

}
}

const GetNewsLetter = async (req,res) => {
    try{
       await Newsletter.find
       (
        {
          desc:{$ne : null} ,
         message:{$ne : null},
         emailTo:{$ne : null},
        }
         ).exec((err,response) => {
        if(err){
          res.send({
            message:"No NewsLetter Found",
            status:404
          })
        }else{
          res.send({
            total: response?.length,
            message:"NewsLetter Fetch Successfully",
            status:200,
            data:response
          })
        }
       })
    
  } catch(err){
    res.send({
      message:"No NewsLetter Found",
      status:404
    })
}

}

const DeleteUserSubscription = async (req,res) => {
  try {
    const deleteUser = await Newsletter.deleteOne({_id : req.params.id});
    res.send({
      message:"User Subscription Finished",
      status:200,
      data: deleteUser
    })
  } catch(err){
    res.send({
      message:"User Subscription Not Finished",
      status:404
    })
  }
}

module.exports = {
    ForSubscription,
    GetNewsLetter,
    DeleteUserSubscription
}