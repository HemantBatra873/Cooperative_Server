import { NextFunction, Request, Response } from "express";
import User from "../models/user.js";
import { geminiAiModel } from "../db/AiModelConfig.js";

interface ChatMessage {
  role: "user" | "model"; 
  content: string;
}

export const generateChatCompletionGemini = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { message } = req.body;

  try {
    const user = await User.findById(res.locals.jwtData.id);
    if (!user)
      return res
        .status(401)
        .json({ message: "User not registered OR Token malfunctioned" });

    // Grab chats of user
    const chats = user.chats.map(({ role, content }) => ({
      role,
      content ,
    })) as ChatMessage[]; // Cast to Chat[] (replace with your Gemini chat type)

    chats.push({ content: message, role: "user" }); // Add user message
    user.chats.push({ content: message, role: "user" });

    // Send all chats with new one to Gemini
    const result = await geminiAiModel.sendMessage(chats.map((chat) => chat.content));

    // Update user chats with response
    user.chats.push({ content: result.response.candidates[0].content.parts[0].text, role: "model" });
    await user.save();

    return res.status(200).json({ chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

// Replace "Chat" with the actual type used for chat messages in your Gemini interaction


export const sendChatsToUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    return res.status(200).json({ message: "OK", chats: user.chats });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};

export const deleteChats = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    //user token check
    const user = await User.findById(res.locals.jwtData.id);
    if (!user) {
      return res.status(401).send("User not registered OR Token malfunctioned");
    }
    if (user._id.toString() !== res.locals.jwtData.id) {
      return res.status(401).send("Permissions didn't match");
    }
    //@ts-ignore
    user.chats = [];
    await user.save();
    return res.status(200).json({ message: "OK" });
  } catch (error) {
    console.log(error);
    return res.status(200).json({ message: "ERROR", cause: error.message });
  }
};