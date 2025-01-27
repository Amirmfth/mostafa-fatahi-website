import Question from "@/models/Question";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// Updating a question
export async function PATCH(req, { params }) {
  // Connecting to DB
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json(
      { status: "failure", message: "Something went wrong with db" },
      { status: 500 }
    );
  }

  try {
    const id = params.questionId;
    const { answer } = await req.json();
    const updatedQuestion = await Question.findByIdAndUpdate(
      id,
      { answer },
      { new: true, runValidators: true }
    );

    return NextResponse.json(
      { status: "success", data: updatedQuestion },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "failure", message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Deleting a question
export async function DELETE(req, { params }) {
  // Connecting to DB
  try {
    await connectDB();
  } catch (error) {
    return NextResponse.json(
      { status: "failure", message: "Something went wrong with db" },
      { status: 500 }
    );
  }

  try {
    const id = params.questionId;
    await Question.findByIdAndDelete(id);

    return NextResponse.json(
      { status: "success", data: null },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { status: "failure", message: "Something went wrong with db" },
      { status: 500 }
    );
  }
}
