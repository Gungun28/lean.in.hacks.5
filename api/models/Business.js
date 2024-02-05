const mongoose=require("mongoose")
const BusinessSchema=new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    businessname: {
        type: String,
        unique:true
    },
    ownername: {
        type: String,
        required: true,
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    BusinessProfile: {
        type: String,
        required: true,
    },
    aboutBusiness: {
        type: String,
        required: true,
        
    },
    businessLogo: {
        type: String,
        required: true,
    },
    category:{
        type:String,
        required:true,
    },
    rating:{
        type:Number,
        default:0,
    },
    productImages: {
        type: Array,
        required: true,
    },
    password:{
        type:String,
        required:true
    }
},{timestamps:true});
module.exports=mongoose.model("Business",BusinessSchema)