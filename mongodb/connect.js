import mongoose from "mongoose";

/**
 * Connect to MongoDB Database using Mongoose
 * @param {string} url MongoDB Connection URL
 */
const connectDB = (url) => {
  mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))
}

export default connectDB;