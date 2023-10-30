import  express  from "express"; 
import  colors from "colors";
import dotenv from "dotenv"
import morgan from "morgan";
import connectDb from "./config/db.js";
import authRoute from './routes/authRoute.js'
import categoryRoute from './routes/categoryRoute.js'
import productroute from './routes/productroute.js'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from "url";
//configure
dotenv.config()

//database config
connectDb()
//esmodulefix
const __filename=fileURLToPath(import.meta.url)

const __dirname =path.dirname(__filename)

const app=express()

//midle ware
app.use(express.json())
app.use(morgan('dev'))
app.use(cors())
app.use(express.static(path.join(__dirname,'./client/build')))
//routes
app.use('/api/v1/auth',authRoute)
app.use('/api/v1/category',categoryRoute)
app.use('/api/v1/product',productroute)

//rest api
app.use('*',function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'))
})

const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server Running on ${process.env.DEV_MODE} mode on ${PORT}`.bgWhite.red);
})
