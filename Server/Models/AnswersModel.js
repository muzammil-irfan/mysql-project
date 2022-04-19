import mongoose from "mongoose";


const answerSchema = mongoose.Schema({
    answeredBy:
    {
        type:String,
        required:true,  
    },
        
    answer:
    {
        type:String,
        required:true, 
    },
    
},
{timestamps:true},

)

const Answers = mongoose.model('Answers', answerSchema);

export default Answers;