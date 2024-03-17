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
                    console.log(list)
                    res.status(200).json(list);

        }catch(err){
            res.status(404).json("Error occured")
        }

})

router.get("/email", async (req, res) => {
    const email = req.query.email;
    try {
      const business = await Business.findOne({ email: email });
      if (!business) {
        return res.status(404).json("Business not found");
      }
      res.status(200).json(business);
    } catch (err) {
      console.error("Error:", err);
      res.status(500).json("Internal server error");
    }
  });

  router.post("/update", async (req, res) => {
    const  email  = req.body.business.email;
    const  user  = req.body.id;
    const userRating = req.body.userRating
    console.log("check")
    try {
      // Find the business by ID
      const business = await Business.findOne({email:email});
      if (!business) {
        return res.status(404).json({ error: "Business not found" });
      }
      console.log(business)
      console.log(user)
      console.log(userRating)

      business.rating = {
        ...business.rating, [user]:userRating
      };
        
      // Save the updated business
      await business.save();
  
      res.status(200).json({ message: "Rating list updated successfully", business });
    } catch (error) {
      console.error("Error updating rating list:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  });

module.exports=router