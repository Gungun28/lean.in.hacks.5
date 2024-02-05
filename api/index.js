const express=require("express")
const app=express()
const mongoose=require("mongoose")
// const authRoute=require("./routes/auth")
const businessRoute=require("./routes/business")
const authRoute=require("./routes/auth")
const dotenv=require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>console.log("Connected")).catch("Error")

app.use(express.json());
// app.use("/api/auth",authRoute);
app.use("/api/auth",authRoute);
app.use("/api/business/",businessRoute);

app.listen(8800,()=>{
    console.log("Backend is running")
})