const router = require('express').Router();
const ImageUploadedByUser = require('../helper/ImageUploadedByUser')
const { 
    UserRegistration ,
    GetAllUser ,
    UserLogin,
    UserUpdate ,
    UserDelete ,
    UserProfile,
    UserAdmin,
    UserStatus
 } = require('../controller/UserController')

router.post('/register' , ImageUploadedByUser.upload , UserRegistration )
router.get('/alluser', GetAllUser)
router.post('/login' , UserLogin)
router.put('/:id' , UserUpdate )
router.delete('/:id' , UserDelete)
router.get('/:id' , UserProfile)
router.put("/status/:id" , UserAdmin)
router.put("/userstatus/:id" , UserStatus)
module.exports = router;