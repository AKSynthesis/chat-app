import mongoose from "mongoose";

// Connection to database
export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    } catch (error) {
        console.log(`MongoDB connected error: ${error}`);
    }
};