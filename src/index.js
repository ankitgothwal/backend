// import mongoose, { connect } from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from"dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB()








/*
import express from "express"
const app = express()

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERROR: ",error);
            throw error   
        })

        app.listen(process.env.PORT,()=>{
            console.log("Server is running on port "+process.env.PORT);
        })
    } catch (error) {
        console.error("ERORR: ",error)
        throw err
    }
})()

*/