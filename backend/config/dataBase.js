const mongoose= require("mongoose")
const connectDb=()=>{
    console.log(">>>, process.env.DB_URL",process.env.DB_URL)
    mongoose.connect(process.env.DB_URL).then((data)=>{
        console.log(">>>> conected db")
    })
}
module.exports=connectDb