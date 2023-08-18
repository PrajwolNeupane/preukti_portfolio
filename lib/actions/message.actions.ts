import { NextResponse } from "next/server";
import Message from "../models/Message.Model";

export const sendMessage = async ({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    var messageModal = new Message({
      name: name,
      email: email,
      message: message
    });
    messageModal = await messageModal.save();
    return NextResponse.json({
      message: "Message Send",
      sucess: true,
    });
  } catch (e: any) {
    return NextResponse.json(
      {
        message: e.message,
        sucess: false,
      },
      {
        status: 500,
      }
    );
  }
};
