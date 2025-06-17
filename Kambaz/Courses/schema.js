import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
   _id: String,
   name: String,
   number: String,
   startDate: String,
   endDate: String,
   department: String,
   credits: Number,
   image: String,
   description: String,
   author: String,
 },
 { collection: "courses" }
);
export default courseSchema;