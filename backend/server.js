const app=require("./app");
const  dotenv=require('dotenv');
const connectDb= require('./config/dataBase')
dotenv.config({path:"backend/config/config.env"})

connectDb()
app.listen(process.env.PORT,()=>{
    console.log("server run......",process.env.PORT)
})