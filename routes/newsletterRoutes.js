const router = require('express').Router();

const { 
    ForSubscription
 } = require('../controller/NewsLetterController')

router.post("/subscribed", ForSubscription)

module.exports = router;