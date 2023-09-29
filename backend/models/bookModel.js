import mongoose from "mongoose";

// new가 뭔지 알아보기
const bookeSchema = new mongoose.Schema(
  {
    title: { required: true, type: String },
    author: { required: true, type: String },
    publishYear: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const Book = mongoose.model("Book", bookeSchema);
