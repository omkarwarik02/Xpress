const mongoose = require("mongoose");
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDb connected");
        return mongoose.connection;
    }
    catch (error){
        console.error("❌ DB connection failed:", error.message);
    process.exit(1);
    }
}
module.exports = connectDB;