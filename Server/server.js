import dotenv from 'dotenv';
import express  from "express";
import cors from "cors";
import questions from "./Data/questions.js"
import ImportData from './dataimport.js';
import connectDatabase from "./mongoDb.js";
import asyncHandler from "express-async-handler"
import questionRoute from './Routes/questions.js';
import AnswerRoute from './Routes/answers.js';
import tagRoute from './Routes/tags.js';

dotenv.config();
const PORT = process.env.PORT || 8000;
connectDatabase();
const app = express();

app.use(cors({
    origin:"*",
    methods:[ "*"]
})); 


// middleware


//add dummy data to mongo
app.use(express.json())
app.use("/api/import", ImportData)
app.use("/api/questions", questionRoute)
app.use("/api/answers", AnswerRoute)
app.use("/api/tags", tagRoute)


//load questions to server

// app.get("/api/questions", (req,res) => {
//     res.json(questions)
// })

// // single product route
// app.get("/api/questions/:id", (req,res) => {
//     const question = questions.find((p) => p._id === req.params.id)
//     res.json(question);
// })

app.get("/", (req,res) => {
    res.send("API is okay ....")
})




 app.listen(8000,console.log(`server is running ${PORT}`));