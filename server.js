// import "dotenv/config";
// import express, { application } from "express";
// import cors from "cors";
// import connectDB from "./config/mongodb.js";
// import connectCloudinary from "./config/cloudnary.js";
// import adminRouter from "./routes/adminRoute.js";

// import doctorRouter from "./routes/doctorRoute.js";
// import userRouter from "./routes/usersRoute.js";

// //app config

// const app = express();
// const port = process.env.PORT || 4000;

// connectDB();
// connectCloudinary();

// //middlewares
// app.use(express.json());
// app.use(cors());

// //api end points
// app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);
// app.use("/api/user", userRouter);

// app.get("/", (req, res) => {
//   res.send("Hello I am working Dude 😎");
// });

// app.listen(port, () => console.log(`\nserver is running on ${port}`));
import express from "express"
import cors from "cors"
import 'dotenv/config'
import connectDB from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import adminRouter from "./routes/adminRoute.js"
import doctorRouter from "./routes/doctorRoute.js";
import usersRouter from "./routes/usersRoute.js";
import mongoose from "mongoose";
//app config

const app= express()
const port= process.env.PORT || 4000;
console.log("MongoDb URl",process.env.MONGODB_URL)
mongoose.connect(process.env.MONGODB_URL)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log('MongoDB connection error:', err));
connectCloudinary()

//middlewares

app.use(express.json())     //we make any req. it passes through this funcn


app.use(cors());
//app.options('*', cors());  


// const allowedOrigins = [
//     'https://healthify-frontend-hazel.vercel.app',
//     'http://localhost:5174',
//     'http://localhost:3000'
//   ];
  
//   const corsOptions = {
//     origin: function (origin, callback) {
//       // Allow requests with no origin (like mobile apps, curl, postman)
//       if (!origin) return callback(null, true);
//       if (allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         callback(new Error('Not allowed by CORS'));
//       }
//     },
//     credentials: true
//   };
  
//   app.use(cors(corsOptions));
//   app.options('*', cors(corsOptions));
//api endpoints

app.use("/api/admin",adminRouter)
//localhost:4000/api/admin/add-doctor
//whenever we call this api adminController fn will be executed


app.use("/api/doctor", doctorRouter);
app.use("/api/user", usersRouter);

app.get("/",(req,res)=>{
    res.send('API WORKING new')
})



app.listen(port, () => {
    console.log('Server running on port 5000');
});

export default app;

// import express from "express";
// import cors from "cors";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import connectCloudinary from "./config/cloudinary.js";
// import adminRouter from "./routes/adminRoute.js";
// import doctorRouter from "./routes/doctorRoute.js";
// import usersRouter from "./routes/usersRoute.js";

// dotenv.config(); // Load .env

// const app = express();
// const port = process.env.PORT || 4000;

// // Middleware
// app.use(express.json());
// app.use(cors());
// app.options("*", cors()); // For pre-flight requests

// // Routes
// app.use("/api/admin", adminRouter);
// app.use("/api/doctor", doctorRouter);
// app.use("/api/user", usersRouter);

// app.get("/", (req, res) => {
//   res.send("API WORKING 🚀");
// });

// // MongoDB Connection and Server Start
// const startServer = async () => {
//   try {
//     console.log("MongoDB URL:", process.env.MONGODB_URL);
//     await mongoose.connect(process.env.MONGODB_URL);
//     console.log("MongoDB connected");

//     connectCloudinary(); // Cloudinary config
//     app.listen(port, () => {
//       console.log(`\n✅ Server running on port ${port}`);
//     });
//   } catch (error) {
//     console.error("❌ Failed to start server:", error.message);
//   }
// };

// startServer();


