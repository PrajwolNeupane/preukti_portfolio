import User from "@/lib/models/User.Model";
import bcryptjs from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { connectToDB } from "@/lib/mongoose";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const key = request.headers.get("api_key");
    if (key === process.env.API_KEY!) {
      const reqBody = await request.json();
      const { email, password } = reqBody;

      const user = await User.findOne({ email: email });
      if (user) {
        return NextResponse.json(
          { error: "User already exists" },
          {
            status: 400,
          }
        );
      }
      //Hash Password
      const salt = await bcryptjs.genSalt(10);
      const hashedPassword = await bcryptjs.hash(password, salt);

      var newUser = new User({
        email,
        password: hashedPassword,
      });

      newUser = await newUser.save();

      const tokenData = {
        id: newUser._id,
      };
      const token = jwt.sign(tokenData, process.env.TOEKN_SECRET!, {
        expiresIn: "1d",
      });

      const response = NextResponse.json({
        message: "User Created",
        success: true,
        newUser,
      });
      response.cookies.set("token", token, {
        httpOnly: true,
      });

      return response;
    } else {
      const response = NextResponse.json(
        {
          messgae: "Wrong Api Key",
        },
        {
          status: 404,
        }
      );
      return response;
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
