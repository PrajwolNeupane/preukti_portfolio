import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import { createUser } from "@/lib/actions/user.actions";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const key = request.headers.get("api_key");
    if (key === process.env.API_KEY!) {
      const reqBody = await request.json();
      const { email, password } = reqBody;
      const resposne = await createUser({ email, password });
      return resposne;
    } else {
      return NextResponse.json(
        { error: "Wrong API key" },
        {
          status: 500,
        }
      );
    }
  } catch (error: any) {
    console.log(error);
    return NextResponse.json(
      { error: error.message },
      {
        status: 500,
      }
    );
  }
}
