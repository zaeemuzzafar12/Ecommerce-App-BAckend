const router = require('express').Router();
const  ImageUploader  = require('../helper/ImageUploader')
const { 
    CreateSlider ,
    GetAllSliders
} = require('../controller/SliderController')

router.post('/addslider' , ImageUploader.upload , CreateSlider )
router.get('/getallslider' , GetAllSliders)

module.exports = router