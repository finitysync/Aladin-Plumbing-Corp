import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

let chatSession: Chat | null = null;

const getAiClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("API_KEY is missing from environment variables. AI features may not work.");
    // In a real scenario, handle this gracefully or prompt user. 
    // For this demo, we assume it's injected.
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const initializeChat = () => {
  const ai = getAiClient();
  if (!ai) return null;

  chatSession = ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: `You are the virtual assistant for Aladdin Plumbing Corp, a high-end plumbing and HVAC company in Brooklyn, NY. 
      Key Company Info:
      - 45+ years in business, family-owned.
      - Specializing in Brownstone renovations, heating, cooling, and plumbing.
      - Famous for appearance on 'This Old House'.
      - We have a GPS-equipped fleet for punctuality.
      - We offer 'One Wish', 'Two Wishes', and 'Three Wishes' service plans.
      
      Your Role:
      - Answer questions about our services politely and professionally.
      - Encourage users to "Book an Appointment" for specific pricing.
      - Be helpful, trustworthy, and concise.
      - Tone: Friendly, expert, reliable.
      - If asked about emergency services, emphasize we have 24-hour operators.`,
    },
  });
  return chatSession;
};

export const sendMessageToAi = async (message: string): Promise<string> => {
  if (!chatSession) {
    initializeChat();
  }
  
  if (!chatSession) {
    return "I'm sorry, I'm having trouble connecting to the server right now. Please call us directly.";
  }

  try {
    const response: GenerateContentResponse = await chatSession.sendMessage({ message });
    return response.text || "I'm sorry, I didn't catch that. Could you rephrase?";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "I apologize, but I'm unable to process your request at the moment. Please try again later or call our office.";
  }
};