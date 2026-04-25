import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`Connected to database successfully ${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Error in connecting to database", error);
        process.exit(1); // Exit the process with a failure code
    }
}
export default connectDB