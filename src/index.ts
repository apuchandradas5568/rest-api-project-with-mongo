import express, { Router } from "express"
import http from "http"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"
import compression from "compression"
import cors from "cors"
import mongoose, { Error } from "mongoose"
import router from "./router"

const app = express()
app.use(cors({
    credentials: true,
}))

app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())

const server = http.createServer(app)




server.listen(8080, ()=>{
    console.log("surver run");
    
})

const MONGO_URL = "mongodb+srv://apuchandradas5569:Apu1234567@first.yx2x8ji.mongodb.net/?retryWrites=true&w=majority";

mongoose.Promise = Promise;
mongoose.connect(MONGO_URL)
mongoose.connection.on("error", (error: Error)=> console.log(error))

app.use("/", router())