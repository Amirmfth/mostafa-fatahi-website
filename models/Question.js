import { Schema, model, models } from "mongoose";

const questionSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please add a name"],
      minlength: [3, "Name must be at least 3 characters"],
      maxlength: [50, "Name must be at most 50 characters"],
    },
    question: {
      type: String,
      required: [true, "Please add a question"],
      minlength: [3, "Question must be at least 3 characters"],
    },
    answer: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const Question = models.Question || model("Question", questionSchema);

export default Question;
