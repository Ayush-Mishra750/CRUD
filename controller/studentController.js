import studentModel from "../models/Student.js";
class StudentController{
    static createDoc=async(req,res)=>{
    //   console.log(req.body);
    try {
        const {name,age,fees}=req.body;
        const doc=new studentModel({
            name:name,
            age:age,
            fees:fees,
        })
        //saving document
        const  result=await doc.save();
        console.log(result);
                res.redirect("/student") 
        
    } catch (error) {
        console.log(error);
    }
    }
    static getAllDoc=async(req,res)=>{
        try {
            const result=await studentModel.find()
            console.log(result);
            res.render('index',{data:result});
            
        } catch (error) {
           console.log(error); 
        }
    }
     static editDoc=async(req,res)=>{
        // console.log(req.params.id);
        // const {id}=req.params.id;
        try {
            const result=await studentModel.findById(req.params.id);
            res.render('edit',{data:result});

        } catch (error) {
            console.log(error);
        }

        
    }
     static updateDocById=async(req,res)=>{
        try {
            const result=await studentModel.findByIdAndUpdate(req.params.id, req.body)
        } catch (error) {
            console.log(error);
        }
        res.redirect("/student")
    }
    static deleteDocByID=async(req,res)=>{
        // console.log(req.params.id);
        try {
            const deleteDoc=await studentModel.findByIdAndDelete(req.params.id);
            
        } catch (error) {
            console.log(error);
        }
         res.redirect("/student")
    }
}
export default StudentController;