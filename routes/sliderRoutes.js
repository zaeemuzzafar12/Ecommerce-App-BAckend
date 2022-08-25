const router = require('express').Router();
const  ImageUploader  = require('../helper/ImageUploader')
const { 
    CreateSlider ,
    GetAllSliders,
    UpdateSlider
} = require('../controller/SliderController')

router.post('/addslider' , ImageUploader.upload , CreateSlider )
router.get('/getallslider' , GetAllSliders)
router.put('/:id' , UpdateSlider)

module.exports = router