const Newsletter = require('../models/NewsletterModel');

const ForSubscription = async (req,res) => {
    try{
    const subscribed = new Newsletter({
        emailTo : req.body.emailTo
    })

    const emails = await subscribed.save();
    console.log(emails , subscribed)
    res.send({
        message:"Email Subscribed Successfully",
        status:200,
        data:emails
    })
} catch(err){
    res.send({
        message:"Email Not Subscribed",
        status:404
    })
}

}

module.exports = {
    ForSubscription
}