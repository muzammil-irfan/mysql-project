import mongoose from "mongoose";

const QuestionSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true, 
    },
    question:{
        type:String,
        required:true,
    },
    tags:[{
        type: mongoose.Types.ObjectId,
        ref: 'Tag',
    }],
    askedBy:{
        type:String,
        required:true,
    },
    answers:{
        type:Array,
        default:[]
    },
    views:{
        type:Array,
        default:[]

    },      
    },
    {timestamps:true}
    );

const Question = mongoose.model('Question', QuestionSchema);

export default Question;


// const answerSchema = mongoose.Schema({
//     answeredBy:
//     {
//         type:String,
//         required:true,  
//     },
        
//     answer:
//     {
//         type:String,
//         required:true, 
//     }
    
// })

// const tagSchema = mongoose.Schema({
//     tag:
//     {
//         type:String,
//         required:true,  
//     }
   
    
// })