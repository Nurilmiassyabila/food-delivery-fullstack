import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        if (mongoose.connection.readyState === 1) {
            return;
        }

        await mongoose.connect(process.env.MONGODB_URI);

        console.log("DB connected");
    } catch (error) {
        console.error("DB connection error:", error);
        throw error;
    }
};