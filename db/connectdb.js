import mongoose from "mongoose";

//connection creating
const connectDb=async(DATABASE_URL)=>{
    try {
       
        await mongoose.connect(DATABASE_URL)
        console.log('connection successfully');
        
    } catch (error) {
        console.log(error);
    }
}
export default connectDb;