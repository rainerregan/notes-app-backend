import mongoose from "mongoose";

const connectDB = (url) => {
  mongoose.connect(url)
    .then(() => console.log('Database connected'))
    .catch((err) => console.log(err))
}

export default connectDB;