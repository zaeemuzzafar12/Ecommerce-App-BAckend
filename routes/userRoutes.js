const router = require('express').Router();
const { 
    UserRegistration ,
    GetAllUser ,
    UserLogin,
    UserUpdate ,
    UserDelete ,
    UserProfile
 } = require('../controller/UserController')

router.post('/register' , UserRegistration )
router.get('/alluser', GetAllUser)
router.post('/login' , UserLogin)
router.put('/:id' , UserUpdate )
router.delete('/:id' , UserDelete)
router.get('/:id' , UserProfile)

module.exports = router;