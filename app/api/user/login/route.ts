import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import { logIn } from "@/lib/actions/user.actions";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const key = request.headers.get("api_key");
    if (key === process.env.API_KEY!) {
      const reqBody = await request.json();
      const { email, password } = reqBody;
      const response = await logIn({ email, password });
      return response;
    } else {
      return NextResponse.json(
        { error: "Wrong API key" },
        {
          status: 500,
        }
      );
    }
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { error: e.message },
      {
        status: 500,
      }
    );
  }
}
