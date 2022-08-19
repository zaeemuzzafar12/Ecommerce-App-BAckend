const router = require('express').Router();
const {
    AddProducts,
    GetAllProducts,
    GetSingleProducts,
    UpdateProducts,
    DeleteProducts,
    ProductsStatus
} = require('../controller/ProductController')

router.post('/addproducts' , AddProducts);
router.get('/getallproducts' , GetAllProducts);
router.get('/getproductid/:id', GetSingleProducts);
router.put('/update/:id' , UpdateProducts);
router.delete('/:id' , DeleteProducts);
router.put('/status/:id' , ProductsStatus);
module.exports = router;