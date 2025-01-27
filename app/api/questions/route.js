import Question from "@/models/Question";
import { connectDB } from "@/utils/connectDB";
import { NextResponse } from "next/server";

// Getting all questions
export async function GET() {
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
    const questions = await Question.find({});

    return NextResponse.json(
      { status: "success", data: questions },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "failure", message: "Something went wrong" },
      { status: 500 }
    );
  }
}

// Creating a new question
export async function POST(req) {
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
    const { name, question } = await req.json();
    const newQuestion = await Question.create({ name, question });
    return NextResponse.json(
      { status: "success", data: newQuestion },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { status: "failure", message: "Something went wrong" },
      { status: 500 }
    );
  }
}

