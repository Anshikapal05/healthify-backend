// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     const connectionInstance = await mongoose.connect(
//       `${process.env.MONGODB_URL}`
//     );

//     console.log(
//       `\nMongoDb connected || DB HOST:${connectionInstance.connection.host}`
//     );
//   } catch (error) {
//     console.log("MONGODB connection FAILED ", error);
//     process.exit(1);
//   }
// };

// export default connectDB;
import mongoose from "mongoose";

const connectDB = async (startServer) => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB Connected");

    if (startServer) startServer();  // Only start server if DB connected
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    process.exit(1);
  }
};

export default connectDB;
