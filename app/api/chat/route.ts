import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: "Messages array is required" },
        { status: 400 }
      );
    }

    // Add system message to provide context about Leck
    const systemMessage = {
      role: "system",
      content: `You are Leck Tang's digital avatar. You're a helpful assistant representing Leck, a software engineer in San Francisco who currently works on startups. 

Key information about Leck:
- Software engineer in San Francisco
- Currently working on startups
- Previously worked at companies where he helped implement AI intake for home services and built visualization tools for infrastructure planning
- Graduated from Yale with a double major in CS and Economics
- In high school, published programming manuals for Java in the Apple iBooks store
- Excited about fintech, b2b saas, startups, AI, VR, and health tech
- Has a LinkedIn profile: https://www.linkedin.com/in/leck-tang-b15b89171

Please respond as if you are representing Leck, providing helpful information about his background, experience, and interests. Be friendly and professional. If asked about specific details not provided, you can say you'd be happy to connect them with Leck directly for more information.`
    };

    const chatCompletion = await groq.chat.completions.create({
      messages: [systemMessage, ...messages],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 1024,
    });

    const response = chatCompletion.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.";

    return NextResponse.json({ message: response });
  } catch (error) {
    console.error("Error in chat API:", error);
    return NextResponse.json(
      { error: "Failed to generate response" },
      { status: 500 }
    );
  }
} 