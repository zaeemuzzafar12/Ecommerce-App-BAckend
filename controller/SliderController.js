const Slider = require('../models/SliderModel');

const CreateSlider = async (req,res) => {
try{
    const filename = req.file.path;
    const basepath = `${req.protocol}://${req.get('host')}/images/products/`;
    const final = `${basepath}${filename}`
    
    const createslider = new Slider({
        name: req.body.name,
        image: `${final}`.replace(/\\/g, "/"),
        desc: req.body.desc,
    });

    const slider = await createslider.save();
    console.log(slider)
    res.send({
        message:"Slider Created Successfully",
        status:200,
        data:slider
    })
} catch(err){
    res.send({
        message:"Slider Not Created",
        status:404
    })
}
}

const GetAllSliders = async (req,res) => {
   try{ 
    const getslider = await Slider.find();
    res.send({
        message:"Slider Fetch Success",
        status:200,
        data:getslider
    })}catch(err){
        res.send({
            message:"Slider Not Fetch",
            status:404
        }) 
    }
}

const UpdateSlider = async (req,res) => {
    const ids = req.params.id;
   try{ const updateslider = await Slider.findByIdAndUpdate(
        ids,
        {$set:req.body},
        {new: true}
    )
    res.send({
        message:"Slider Details Updated",
        status:201,
        data:updateslider
    })
}catch(err){
    res.send({
        message:"Slider Details Not Updated",
        status:404
    })
}
}

module.exports = {
    CreateSlider,
    GetAllSliders,
    UpdateSlider
}