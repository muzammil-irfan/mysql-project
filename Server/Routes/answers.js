import express  from "express";
import asyncHandler from "express-async-handler"
import Answers from "../Models/AnswersModel.js";
import Question from "../Models/QuestionModel.js";

const AnswerRoute = express.Router()



// AnswerRoute.post('/:id/answer/', asyncHandler(async (req, res) => {
//     console.log("=======================>", req.body);
//     const {answeredBy, answer} = req.body
//     const question = await Question.findById(req.body._id);

//     if (question) {
//         const answers = new  Answers({ 
//             answeredBy, answer
//          })

//         const savedAnswer = await answers.save();
//         await question.updateOne({$push:{answers: savedAnswer}});


//         res.status(200).json(savedAnswer)

        
//     } else {
//         res.status(403).json("Question not found  ");
        
//     }



// }));
AnswerRoute.post('/', asyncHandler(async (req, res) => {
    console.log("=======================>", req.body);
    const {answeredBy, answer} = req.body
    const question = await Question.findById(req.body._id);

    if (question) {
        const answers = new  Answers({ 
            answeredBy, answer
         })

        const savedAnswer = await answers.save();
        await question.updateOne({$push:{answers: savedAnswer}});


        res.status(200).json(savedAnswer)

        
    } else {
        res.status(403).json("Question not found  ");
        
    }



}));

export default AnswerRoute;