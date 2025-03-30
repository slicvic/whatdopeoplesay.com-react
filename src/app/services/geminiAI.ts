import axios from "axios";
import { AIResult, Phrase } from "../types/types";

const API_KEY = "AIzaSyCUePWyqyham0elOS5g9_0nsntCRcEGCS4";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const PROMPT = `
Analyze and rank the following phrases based on their historical level of general acceptance and widespread use.

Phrases to rank:

{{PHRASES}}

Provide a structured JSON object with the following keys:

- "winner": The number corresponding to the phrase with the highest level of general acceptance and widespread use.
- "analysis": A concise justification for your ranking.
`;

const preparePrompt = (phrases: Phrase[]): string => {
  const prompt = PROMPT.replace(
    "{{PHRASES}}",
    phrases.map((phrase, index) => `${index + 1}. ${phrase}`).join("\n")
  );
  return prompt;
};

export const askAI = async (phrases: Phrase[]): Promise<AIResult | null> => {
  let result = null;
  const prompt = preparePrompt(phrases);

  try {
    const apiResponse = await axios({
      method: "post",
      url: BASE_URL,
      data: {
        generationConfig: {
          response_mime_type: "application/json",
        },
        contents: [
          {
            parts: [
              {
                text: prompt,
              },
            ],
          },
        ],
      },
    });

    const text = apiResponse.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (text && typeof text === "string") {
      const parsed = JSON.parse(text);
      if (
        parsed?.winner &&
        (typeof parsed.winner === "number" ||
          typeof parsed.winner === "string") &&
        parsed?.analysis &&
        typeof parsed.analysis === "string"
      ) {
        result = {
          winner: parsed.winner,
          analysis: parsed.analysis,
        };
      }
    }
  } catch (error) {}

  return result;
};
