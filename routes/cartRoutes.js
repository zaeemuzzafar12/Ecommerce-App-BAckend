const router = require('express').Router();
const { 
    CreateCarts,
    DeleteCart,
    GetCart
 } = require('../controller/CartController')


 router.post('/addcart' , CreateCarts)
 router.delete('/deletecart' , DeleteCart)
 router.get('/allcartitem' , GetCart)

module.exports = router;