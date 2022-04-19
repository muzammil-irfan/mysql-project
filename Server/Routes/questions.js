import express  from "express";
import asyncHandler from "express-async-handler"
import Question from "../Models/QuestionModel.js";
import Tag from "../Models/TagModel.js";
import { v4 as uuidv4 } from 'uuid';
import mongoose from "mongoose";


const questionRoute = express.Router()

questionRoute.get("/", asyncHandler(async(req, res)=>{
    const questions = await Question.aggregate([
        { $sort: { createdAt: -1 } },
        {
            $lookup:
            {
                from: 'tags',
                localField: 'tags',
                foreignField: '_id',
                as: 'tags'
            },
        },
    ]);

    console.log("questions=====>", questions);

    res.json({questions})
}))
questionRoute.get("/:id", asyncHandler(async(req, res)=>{

    const uniqueToken = uuidv4(); 
    try {
        const question = await Question.findById(req.params.id);
        const Tags = await Tag.find({_id: {$in: question.tags}});
        await question.updateOne({$push:{views: uniqueToken}});

        res.status(200).json({question, Tags});

        
    } catch (error) {
        res.status(500).json("question not found ")

    }
}))


//find questions of tags
questionRoute.get('/question/:id',  async (req, res) => {
    const id = await (req.params.id)
    
    try {
        // const Record = await Question.find({'tags':  mongoose.Types.ObjectId(id)})
        const Record = await Question.aggregate([
            { $match: {'tags':  mongoose.Types.ObjectId(id)}},
            {
                $lookup: {
                    from: "tags",
                    localField: "tags",
                    foreignField: "_id",
                    as: "tags"
                }
            }
        ])
        const Tags = await Tag.find({_id: {$in: Record.tags}});

        res.status(200).json({
            Record: Record,
            Tags: Tags,
        })
        
    } catch (error) {
        console.log("error", error)
    }

})

questionRoute.post('/', asyncHandler(async (req, res) => {
    const {title, question, tags, answers, askedBy} = req.body

    let newTags = tags
    
    try {
        if (newTags && newTags.length > 0) {
            const my_tags = []
            await newTags.forEach(async (tag, index) => {
                // try saving a tag, if it exists fetch the tag id
                try {
                    let Record = await Tag.create({'name': tag})
    
                    if (Record) {
                        console.log("Record", Record)
                        my_tags.push(Record._id) 
                    }
                } catch (error) {
                    let oldTag = await Tag.findOne({'name': tag})
                    if (oldTag) {
                        console.log("oldTag", oldTag)
                        my_tags.push(oldTag._id)
                    }
                }
                
                if (index === newTags.length - 1) {
                    const questions = new  Question({ 
                        title, question, "tags": my_tags, answers, askedBy
                     })
                    const savedQuestion = await questions.save();
                    // await Tag.updateOne({$push:{questions: savedQuestion}});
            
                    res.status(200).json(savedQuestion);
                }
    
    
            });   
        }else{
            const questions = new  Question({ 
                title, question,  answers, askedBy
            })
            const savedQuestion = await questions.save();
            // await Tag.updateOne({$push:{questions: savedQuestion}});

            res.status(200).json(savedQuestion);

       }

    } catch (error) {
        res.status(500).json(error)

    }

}));

export default questionRoute;