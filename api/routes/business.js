const router=require("express").Router()
const Business=require("../models/Business");
const CryptoJS=require("crypto-js");
const jwt=require("jsonwebtoken")
const verify=require("../verifyToken")
//GET
router.get("/all",async(req,res)=>{
    const typeQuery=req.query.type;
    let list=[];
        try{
            list=await Business.aggregate([
                        {
                            $match:{category:typeQuery}
                        }
                    ])
            res.status(200).json(list);
        }catch(err){
            res.status(404).json("Error occured")
        }

})


module.exports=router