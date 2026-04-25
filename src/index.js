import dotenv from "dotenv"
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";  //.js is necessary
//import connectDB from "./db/index.js";  //.js is necessary
//connectDB() is not used because we are connecting to the database directly in 
//      the IIFE below. You can choose to use connectDB() if you prefer a cleaner 
//      separation of concerns, but for simplicity, I've included the connection 
//      logic directly in the IIFE.
dotenv.config({
    path: "./.env"
})
import express from "express";
const app = express();

;(async () => { // ()() is an IIFE (Immediately Invoked Function Expression) to use async/await at the top level
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (error)=>{
            console.log("ERROR in app.on" , error)
            throw error
        })
        app.listen(process.env.PORT, ()=>{
            console.log(`Server is running on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("Error in connecting to database", error);
        throw error;
    }
})();