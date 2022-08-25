const router = require('express').Router();
const  ImageUploader  = require('../helper/ImageUploader')
const { CreateSlider } = require('../controller/SliderController')

router.post('/addslider' , ImageUploader.upload , CreateSlider )

module.exports = router