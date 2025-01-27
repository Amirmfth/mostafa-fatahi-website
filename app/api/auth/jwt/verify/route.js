import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

const SECRET_KEY = process.env.JWT_SECRET; // Store securely in .env

export async function POST() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Token is required" },
        { status: 400 }
      );
    }

    // Verify the token
    const decoded = jwt.verify(token, SECRET_KEY);

    return NextResponse.json({ valid: true, decoded });
  } catch (error) {
    return NextResponse.json(
      { valid: false, message: "Invalid token", error: error.message },
      { status: 401 }
    );
  }
}
