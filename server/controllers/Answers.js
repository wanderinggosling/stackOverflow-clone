import mongoose from "mongoose";
import Questions from "../models/Questions.js";

export const postAnswer = async (req, res) => {
    const { id: _id } = req.params;
    const { noOfAnswers, answerBody, userAnswered,userId } = req.body;

    if (!mongoose.Types.ObjectId.isValid(_id)) {
        res.send(404).json("question not found");
    }

    updateNoOfQuestions(_id,noOfAnswers);

    try {
        const updatedQuestion = await (Questions.findByIdAndUpdate(_id, { $addToSet: { 'answer': [{ answerBody, userAnswered, userId}] } }))
        res.status(200).json(updatedQuestion)
    } catch (error) {
        console.log(error);
        res.status(404).json(error);
    }
}

export const deleteAnswer=async(req,res)=>{
    const {id : _id}=req.params;
    const {answerId, noOfAnswers}=req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)){
        res.status(404).json("Questions not available");
    }

    if(!mongoose.Types.ObjectId.isValid(answerId)){
        res.status(404).json("Answer not available");
    }

    updateNoOfQuestions(_id, noOfAnswers)
    try {
        await Questions.updateOne({_id},{$pull :{'answer':{_id:answerId}} })
        res.status(200).json("successfully deleted answer");
    } catch (error) {
        console.log(error)
        res.status(404).json(error)
    }
}

const updateNoOfQuestions = async (_id, noOfAnswers) => {
    try {
        await Questions.findByIdAndUpdate(_id, { $set: { 'noOfAnswers': noOfAnswers } });
    } catch (error) {
        console.log(error);
    }
}
