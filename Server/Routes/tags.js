import express from "express";
import asyncHandler from "express-async-handler"
import Question from "../Models/QuestionModel.js";
import Tag from "../Models/TagModel.js";

const tagRoute = express.Router()

tagRoute.get("/", asyncHandler(async (req, res) => {
    const tags = await Tag.aggregate([
        {
            $lookup: {
                from: 'questions',
                localField: '_id',
                foreignField: 'tags',
                as: "questions",
            }
        },
        { $addFields: { qustions_count: { $size: "$questions" }}}
    ])
    console.log("tags====>", tags);
    res.json(tags)
}))

tagRoute.post('/', asyncHandler(async (req, res) => {
    const { name } = req.body
    try {
        const tags = new Tag({
            name
        })
        const savedTag = await tags.save();
        res.status(200).json(savedTag);


    } catch (error) {
        res.status(500).json(error)

    }
}));


tagRoute.get('/:id', async (req, res) => {
    try {
        const share = await Tag.findById(req.params.id);
        res.status(200).json(share);


    } catch (error) {
        res.status(500).json("tag  not found ")

    }

})


export default tagRoute;