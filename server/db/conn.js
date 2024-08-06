const mongoose = require("mongoose");
require("dotenv").config();

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useNewUrlParser:true
}).then(()=>console.log("Database Connected Successfully."))
.catch((error)=>{
    console.log("error",error);
})