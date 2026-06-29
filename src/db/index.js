import mongoose from "mongoose"
import { MONGO_DB } from "../constants.js"

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI in .env');
    process.exit(1);
  }


//<------CONNECTION OF DATABASE WITH BACKEND AND PROJECT HAS BEEN DONE USING TRY AND CATCH METHOD------>//

  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGO_DB}`);
    console.log('\n mongoDB is connected HOST::', connection.connection.host);
    return connection;
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    throw error;
  }
}

export default connectDB
