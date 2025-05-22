import express from 'express';
import connectDb from './db/connectdb.js';
import {join} from 'path'
import web from './routes/web.js';
const app=express();
const PORT=process.env.PORT||3000;
const DATABASE_URL=process.env.DATABASE_URL||'mongodb://localhost:27017/school';
//database connection
connectDb(DATABASE_URL);

//static file
app.use('/student',express.static(join(process.cwd(),'public')));
app.use('/student/edit',express.static(join(process.cwd(),'public')));

//url encoded
app.use(express.urlencoded({extended:false}))

//set template engine
app.set('view engine','ejs');
//load routes
app.use('/student',web)
app.listen(PORT,()=>{
    console.log(`server listening at the http://localhost:${PORT}`);
})