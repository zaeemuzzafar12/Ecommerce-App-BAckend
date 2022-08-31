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
        text: email.desc || "Testing complete"
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

module.exports = {
    ForSubscription
}