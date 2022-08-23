const Stripe = require('stripe')(process.env.STRIPE_KEY)

const StripePaymentGateway = (req,res) => {

  Stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd"
    } , (err,response) => {
        
        if(err){
            res.send({
                message:"Transaction Failed",
                status:404
            })
        }else{
            res.send({
                message:"Transaction Successful",
                status:200,
                data:response
                
            })
        }
    })


}

module.exports = {
    StripePaymentGateway
}