const ImageUploadedByProduct = require('../helper/ImageUploadedByProduct')
const router = require('express').Router();
const {
    AddProducts,
    GetAllProducts,
    GetSingleProducts,
    UpdateProducts,
    DeleteProducts,
    ProductsStatus,
    // AddProductImage
} = require('../controller/ProductController')

// router.post('/productimage' , AddProductImage);
router.post('/addproducts' , ImageUploadedByProduct.upload ,  AddProducts);
router.get('/getallproducts' , GetAllProducts);
router.get('/getproductid/:id', GetSingleProducts);
router.put('/update/:id' , UpdateProducts);
router.delete('/:id' , DeleteProducts);
router.put('/status/:id' , ProductsStatus);

module.exports = router;