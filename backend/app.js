const express=require("express");
const product= require("./routes/productRotes")  
const errorMiddlerware=require("./middleware/error")
const app= express();
app.use(express.json() )
app.use("/api/v1",product);
app.use(errorMiddlerware)
module.exports=app;