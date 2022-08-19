const router = require('express').Router();

const {
    AddCategory,
    GetAllCategory,
    SingleCategoryById,
    UpdateCategory,
    DeleteCategory
} = require('../controller/CategoryController')

router.post('/addcatgory' , AddCategory);
router.get('/allcategory', GetAllCategory);
router.get('/category/:id' , SingleCategoryById);
router.put('/:id' , UpdateCategory);
router.delete('/:id' , DeleteCategory);

module.exports = router;
