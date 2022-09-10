const router = require('express').Router();
const  ImageUploaderBySlider  = require('../helper/ImageUploaderBySlider')
const { 
    CreateSlider ,
    GetAllSliders,
    FetchSpecificSlider,
    UpdateSlider,
    DeleteSlider,
    ChangeStatusForSlider,
    GetDisplay
} = require('../controller/SliderController')

router.post('/addslider' , ImageUploaderBySlider.upload , CreateSlider )
router.get('/getallslider' , GetAllSliders)
router.get('/displayslider' , GetDisplay)
router.get('/getspecificslider/:id' , FetchSpecificSlider)
router.put('/:id' , ImageUploaderBySlider.upload , UpdateSlider)
router.delete('/:id' , DeleteSlider)
router.put('/status/:id' , ChangeStatusForSlider)

module.exports = router