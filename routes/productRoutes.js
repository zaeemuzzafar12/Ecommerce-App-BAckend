const ImageUploadedByProduct = require('../helper/ImageUploadedByProduct')
const router = require('express').Router();
const {
    AddProducts,
    GetAllProducts,
    GetSingleProducts,
    UpdateProducts,
    DeleteProducts,
    ProductsStatus,
    SearchProducts,
    GetActiveProducts
} = require('../controller/ProductController')


router.post('/addproducts' , ImageUploadedByProduct.upload ,  AddProducts);
router.get('/getallproducts' , GetAllProducts);
router.get('/getproductid/:id', GetSingleProducts);
router.put('/update/:id' , ImageUploadedByProduct.upload , UpdateProducts);
router.delete('/:id' , DeleteProducts);
router.put('/status/:id' , ProductsStatus);
router.get('/search/:keyword' , SearchProducts)
router.get('/getactiveproducts' , GetActiveProducts)

module.exports = router;