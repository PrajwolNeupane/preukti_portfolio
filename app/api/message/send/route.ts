import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongoose";
import { sendMessage } from "@/lib/actions/message.actions";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const key = request.headers.get("api_key");
    if (key === process.env.API_KEY!) {
      const reqBody = await request.json();
      const { email, name, message } = reqBody;
      const resposne = await sendMessage({ name, email, message });
      return resposne;
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
