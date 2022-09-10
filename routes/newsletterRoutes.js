const router = require('express').Router();

const { 
    ForSubscription,
    GetNewsLetter,
    DeleteUserSubscription
 } = require('../controller/NewsLetterController')

router.post("/subscribed", ForSubscription)
router.get('/getnewsletter' , GetNewsLetter)
router.delete('/delete/:id' , DeleteUserSubscription)

module.exports = router;