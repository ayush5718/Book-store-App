import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./routes/book.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
const app = express()


dotenv.config();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT|| 4000;
const URI = process.env.MONGOURI;

// connect to nongodb
try{
    mongoose.connect(URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    console.log("connected to mongodb");
}catch(err){
    console.log("ERROR",err);
}
// defining rotes
app.use("/book",bookRoute);
app.use("/user",userRoute);
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})