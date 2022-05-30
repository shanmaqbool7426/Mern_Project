const app = require("./app");
const dotenv = require('dotenv');
const connectDb = require('./config/dataBase')
dotenv.config({ path: "backend/config/config.env" })

connectDb()
const server = app.listen(process.env.PORT, () => {
    console.log("server run......", process.env.PORT)
})

process.on("uncaughtException", (err) => {
    console.log("Error :", err.message);
    console.log("Shuting down due to uncaughtException")
    process.exit(1)
})

process.on("unhandledRejection", (err) => {
    console.log("Error :", err.message);
    console.log("Shuting down due to unhandled Promise Rejection")
    server.close(() => {
        process.exit(1)
    })
})