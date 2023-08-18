import { NextResponse } from "next/server";
import User from "../models/User.Model";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
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
  } catch (e: any) {
    console.log(e.message);
    return NextResponse.json(
      { error: e.message },
      {
        status: 500,
      }
    );
  }
};

export const logIn = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    var user = await User.findOne({ email: email });
    if (!user) {
      return NextResponse.json(
        { error: "User dont't exists" },
        {
          status: 400,
        }
      );
    }

    const validPassword = await bcryptjs.compare(password, user.password);

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid Password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
    };
    const token = jwt.sign(tokenData, process.env.TOEKN_SECRET!, {
      expiresIn: "1d",
    });

    const response = NextResponse.json({
      message: "Login Successful",
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(
      { error: e.message },
      {
        status: 500,
      }
    );
  }
};
