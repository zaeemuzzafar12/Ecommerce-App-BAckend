const router = require('express').Router();
const { 
    AddOrders,
    GetSpecificUserOrder,
    AllOrders,
    DeleteOrders,
    StatusChange,
    UpdateOrders
} = require('../controller/OrderController')

router.post('/addorder' , AddOrders);
router.get('/:userId' , GetSpecificUserOrder);
router.get('/' , AllOrders);
router.delete('/:id' , DeleteOrders)
router.put('/status/:id' , StatusChange)
router.put('/update/:id' , UpdateOrders);
module.exports = router;