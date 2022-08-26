const router = require('express').Router();
const  ImageUploaderBySlider  = require('../helper/ImageUploaderBySlider')
const { 
    CreateSlider ,
    GetAllSliders,
    UpdateSlider
} = require('../controller/SliderController')

router.post('/addslider' , ImageUploaderBySlider.upload , CreateSlider )
router.get('/getallslider' , GetAllSliders)
router.put('/:id' , UpdateSlider)

module.exports = router