import { GoogleGenAI } from "@google/genai";
import { Language } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
const modelName = "gemini-2.5-flash-preview-09-2025";

export const getGeminiResponse = async (prompt: string, lang: Language) => {
    const systemPrompt = `You are an expert STEM mentor for children in Myanmar (IDP camps). 
Response Language: ${lang === 'my' ? 'Burmese' : 'English'}.
Provide a DETAILED DIY project or career path. Format your response exactly like this:
Title: [Name]
Materials: [List]
Instructions: [Step-by-step numbered steps]
Explanation: [Brief Science behind it]
Be very encouraging and inspiring.`;

    try {
        const response = await ai.models.generateContent({
            model: modelName,
            contents: prompt,
            config: {
                systemInstruction: systemPrompt
            }
        });

        return response.text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw error;
    }
};