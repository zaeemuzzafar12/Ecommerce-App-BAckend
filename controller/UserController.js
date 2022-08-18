const User = require('../models/UserModel');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// Register Api start here
const UserRegistration = async (req,res) => {
    const newUsers = new User({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt( req.body.password ,process.env.SECRET_PASSWORD).toString(),
    });
    try{
        const savedUser = await newUsers.save()
        res.send({
            message:"User Created Successfully",
            status:200,
            data:savedUser,
        })
    }catch(error){
        res.send({
            message:"User Not Created !X!",
            status:404,
        })
    }


}
// Register Api end here

// Get All users Api start here
const GetAllUser = async(req,res) => {
    const offset = req.query.offset;
    const limit = req.query.limit;
    const skip = (offset - 1) * limit;
    try{
        const totaldata = await User.countDocuments();
        const data = await User.find().limit(limit).skip(skip)
        res.send({
            total:data.length ? data.length : totaldata,
            message:"All Users Fetch Successfully",
            status:200,
            data:data,
        })

    }catch(err){
        res.send({
            message:"User Not Fetched",
            status:404,
            data:err
        })
    }

}
// Get All user Api end here

// Login Api start here
const UserLogin = async (req,res) => {
    try {
        const user = await User.findOne({ email: req.body.email});
        const originalpassword = CryptoJS.AES.decrypt(user.password, process.env.SECRET_PASSWORD).toString(CryptoJS.enc.Utf8)
        if(!user){
            res.send({
                message:"Not Valid Email",
                status:404
            })
        }
        else if(originalpassword !== req.body.password){
            res.send({
                message:"Not Valid Password",
                status:404
            })
        }
        else {
            const access_token = jwt.sign(
                { 
                id: user._id,
                isAdmin: user.isAdmin 
                },process.env.JWT_TOKEN , { expiresIn:"20s" })

            const { password ,isAdmin,...detail} = user._doc
            res.send({
                message:"You are logged in Successfully",
                status:200,
                data:{...detail,access_token}
            })
        }     
    } catch(error){
        res.send({
            message:"Not Valid Credentails",
            status:500
        })
    }
}
// Login Api end here

// Update User Api start here
const UserUpdate = async (req,res) => {
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt( req.body.password ,process.env.SECRET_PASSWORD).toString()
    }
    try{
        const updateUser = await User.findByIdAndUpdate(
            req.params.id , { $set:req.body} , { new:true }
        )
        res.send({ 
            message:"User Updated Successfully!!!",
            status:201,
            data:updateUser
         })
    }catch(error){
        res.send({ 
            message:"User Not Updated XXX",
            status:404,
         })
    }
}
// Update User Api end here

// Delete User Api start here
const UserDelete = async (req,res) => {
    try{
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        if(!deleteUser){
            res.send({
                message:"User Not Found",
                status:404
            })
        } else {
            res.send({
                message:"User Deleted Successfully",
                status:200,
                data:deleteUser
            })

        }
    } catch(error){
        res.send({
            message:"User Not Deleted Successfully",
            status:500,
        })
    }

}
// Delete User Api end here

// Get Single User By Id Api start here
const UserProfile = async (req,res) => {
    const userid = req.params.id
    try{
        const getUserProfile = await User.findById(userid).exec();
        console.log(getUserProfile)
        const  { password , ...userdetails  } = getUserProfile?._doc
        res.send({
            message:"User Profile Data Fetch Successfully",
            status:200,
            data:userdetails
        })
    } catch(err){
        res.send({
            message:"User Profile Not Found",
            status:404
        })
    }
    
}
// Get Single User By Id Api end here

// Status change Api start here
const UserAdmin = async (req,res) => {
    const Ids = req.params.id;
try{
    const status = await User.findByIdAndUpdate(
        Ids, 
       { $set:req.body} ,
        {new :true}
    )
    const {isAdmin , ...other} = status
    res.send({
        message:"Status Change Successfully",
        status:200,
        data:isAdmin
    })
}catch(err){
    res.send({
        message:"Status Not Changed",
        status:404
    })
}

}
// Status change Api end here



module.exports = {
    UserRegistration,
    GetAllUser,
    UserLogin,
    UserUpdate,
    UserDelete,
    UserProfile,
    UserAdmin
}