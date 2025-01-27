import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET; // Store securely in .env

export async function POST(request) {
  try {
    const body = await request.json();

    // Payload for the token (e.g., user data)
    const { adminCode, role } = body;

    if (!adminCode || !role) {
      return NextResponse.json(
        { message: "adminCode and role are required" },
        { status: 400 }
      );
    }

    if (adminCode !== process.env.ADMIN_CODE) {
      return NextResponse.json(
        { message: "Invalid adminCode" },
        { status: 401 }
      );
    }

    // Generate the token
    const token = jwt.sign({ adminCode, role }, SECRET_KEY, {
      expiresIn: 7 * 24 * 60 * 60, // Token expiration time
    });

    const response = NextResponse.json({
      status: "success",
      message: "Token generated successfully",
    });
    response.cookies.set("token", token, {
      httpOnly: true,
      secure: true,
      maxAge: 7 * 24 * 60 * 60,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: "Error generating token", error: error.message },
      { status: 500 }
    );
  }
}
