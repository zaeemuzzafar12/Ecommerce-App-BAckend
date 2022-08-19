const router = require('express').Router();

const {
    AddCategory,
    GetAllCategory,
    SingleCategoryById,
    UpdateCategory,
    DeleteCategory,
    StatusCategory
} = require('../controller/CategoryController')

router.post('/addcatgory' , AddCategory);
router.get('/allcategory', GetAllCategory);
router.get('/category/:id' , SingleCategoryById);
router.put('/:id' , UpdateCategory);
router.delete('/:id' , DeleteCategory);
router.put('/status/:id' , StatusCategory);

module.exports = router;
