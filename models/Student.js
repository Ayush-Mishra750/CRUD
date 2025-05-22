import mongoose from 'mongoose'

//creating schema
const studentSchema=new mongoose.Schema({
    name:{type:String , required:true,trim:true},
    age:{type:Number,min:18,max:45,required:true},
    fees:{type:mongoose.Decimal128,required:true,validate:(value)=>value>=5000.5}
})

//creating model
const studentModel=mongoose.model('student',studentSchema);

export default studentModel;