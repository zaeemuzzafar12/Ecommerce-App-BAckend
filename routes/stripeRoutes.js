const router = require('express').Router();
const {
    StripePaymentGateway
} = require('../controller/StripeController')

router.post('/checkout' , StripePaymentGateway)

module.exports = router