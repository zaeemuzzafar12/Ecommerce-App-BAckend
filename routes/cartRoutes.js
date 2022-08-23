const router = require('express').Router();
const { 
    CreateCarts,
    DeleteCart,
    GetCart,
    UpdateCart
 } = require('../controller/CartController')


 router.post('/addcart' , CreateCarts)
 router.get('/:userId' , GetCart)
 router.delete('/:id' , DeleteCart)
 router.put('/:id' , UpdateCart)

module.exports = router;