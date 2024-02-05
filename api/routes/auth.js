const router=require("express").Router()
const Business=require("../models/Business");
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
//REGISTER

router.post("/register",async(req,res)=>{
    const { password, ...otherProperties } = req.body;
    console.log(req.body);
    const encryptedPassword = CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString();

    const newBusiness = new Business({
        // Spread other properties
        ...otherProperties,
        // Include the encrypted password
        password: encryptedPassword,
    });
    try{
        
        const user=await newBusiness.save();
        res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
})


// LOGIN
router.post("/login",async(req,res)=>{
    try{
        // console.log(req.body)
        const user = await Business.findOne({ email: req.body.email });
        if (!user) {
            console.error("User not found for email:", req.body.email);
            return res.status(401).json("Wrong Credentials");
        }
        const bytes=CryptoJS.AES.decrypt(user.password,process.env.SECRET_KEY);
        const originalPassword=bytes.toString(CryptoJS.enc.Utf8);
        if (originalPassword !== req.body.password) {
            console.error("Incorrect password for user:", user.email);
            return res.status(400).json("Wrong Credentials");
        }
        
        const {password,...info}=user._doc;
        const accessToken=jwt.sign({id:user._id},process.env.SECRET_KEY,{expiresIn:"5d"})
        res.status(200).json({info,accessToken})
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports=router