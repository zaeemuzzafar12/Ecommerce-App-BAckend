const Slider = require('../models/SliderModel');

const CreateSlider = async (req,res) => {
try{
     const filename = req.file.path;
     const files = `${filename}`.replace("public","");
    // const basepath = `${req.protocol}://${req.get('host')}`;
    // const final = `${basepath}/${filename}`
    
    const createslider = new Slider({
        name: req.body.name,
        image: `${files}`.replace(/\\/g, "/" ),
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

const FetchSpecificSlider = async (req,res) => {
    const id = req.params.id;
try{
    const FetchData = await Slider.findById(id);

    res.send({
        message:"Data Fetch Successfully",
        status:200,
        data:FetchData
    })

}catch(err){
    res.send({
        message:"Data Not Fetch",
        status:404
    })
}

}

const UpdateSlider = async (req,res) => {

    const filename = req?.file?.path;
    const files = `${filename}`.replace("public","");

    const ids = req.params.id;
   try{ const updateslider = await Slider.findByIdAndUpdate(
        ids,
        {
            $set: 
            {
                 name: req.body.name ,
                image: `${files}`.replace(/\\/g, "/" ), 
                desc: req.body.desc
            }
        },
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

const DeleteSlider = async(req,res) => {
    try{
        const sliderDelete = await Slider.deleteOne({ _id : req.params.id});
        res.send({
            message:"Slider Delete Successfully",
            status:200,
            data: sliderDelete
        })
    } catch(err){
        res.send({
            message:"Slider Not Deleted",
            status:404
        })
    }
}

const ChangeStatusForSlider = async (req,res) => {
   try{ const updateStatus = await Slider.updateOne(
        { _id : req.params.id  },
        { $set : { status : req.body.status} },
        {new:true}
        )
        res.send({
            message:"Status Changed Successfully",
            status:200,
            data:updateStatus
        })
    } catch(err){
        res.send({
            message:"Status Changed Successfully",
            status:404
        })
    }
}

const GetDisplay = async (req,res) => {
   try { const displayslider = await Slider.find({ status : { $eq: true}});
    res.send({
        message:"Enabled Slider",
        status:200,
        data:displayslider
    })
}catch(err){
    res.send({
        message:"Slider Not Enalbed",
        status:404
    })
}
}
module.exports = {
    CreateSlider,
    GetAllSliders,
    FetchSpecificSlider,
    UpdateSlider,
    DeleteSlider,
    ChangeStatusForSlider,
    GetDisplay
}