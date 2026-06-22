import mongoose from "mongoose"
import {MONGO_DB} from "../constants.js"

const connectDB = async () => {
  if (!process.env.MONGODB_URI) {
    console.error('Missing MONGODB_URI in .env');
    process.exit(1);
  }

  try {
    const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${MONGO_DB}`);
    console.log('\n mongoDB is connected HOST::', connection.connection.host);
  } catch (error) {
    console.error('Error occurred while connecting to MongoDB:', error);
    process.exit(1);
  }
}
export default connectDB;
