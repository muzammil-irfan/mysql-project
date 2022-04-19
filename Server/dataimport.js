import express from "express"
import Question from "./Models/QuestionModel.js"
import questions from "./Data/questions.js"
import asyncHandler from "express-async-handler"
const ImportData = express.Router()

ImportData.post("/questions", asyncHandler(async(req,res)=>{
    await Question.deleteMany({})
    const  importQuestion = await Question.insertMany(questions)
    res.send({importQuestion})
}))

export default ImportData;