import mongoose from "mongoose";
import  colors from "colors";
const connectDb= async()=>{

const conn=await mongoose.connect(process.env.MONGO_URL)

}
export default connectDb