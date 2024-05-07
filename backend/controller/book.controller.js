import Book from "../models/book.model.js";

export const getBook=async (req,res)=>{
    try{
        const book=await Book.find()
        res.status(200).json(book);
    }catch(err){
        console.log("Error findind book",err);
        res.status(500).json(err);
    }
};