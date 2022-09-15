const router = require('express').Router();
const ImageUploadedByCategory = require('../helper/ImageUploadedByCategory')
const {
    AddCategory,
    GetAllCategory,
    SingleCategoryById,
    UpdateCategory,
    DeleteCategory,
    StatusCategory,
    GetActiveCategory
} = require('../controller/CategoryController')

router.post('/addcatgory' , ImageUploadedByCategory.upload , AddCategory);
router.get('/allcategory', GetAllCategory);
router.get('/category/:id' , SingleCategoryById);
router.put('/:id' , ImageUploadedByCategory.upload , UpdateCategory);
router.delete('/:id' , DeleteCategory);
router.put('/status/:id' , StatusCategory);
router.get('/getactivecategory' , GetActiveCategory)

module.exports = router;
