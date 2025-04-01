import axios from "axios";
import { AIResults, SearchPhrase } from "../types/types";

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

const preparePrompt = (searchPhrases: SearchPhrase[]): string => {
  const prompt = PROMPT.replace(
    "{{PHRASES}}",
    searchPhrases
      .map((searchPhrase, index) => `${index + 1}. ${searchPhrase}`)
      .join("\n")
  );
  return prompt;
};

export const askAI = async (
  searchPhrases: SearchPhrase[]
): Promise<AIResults | null> => {
  let result = null;
  const prompt = preparePrompt(searchPhrases);

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
        (typeof parsed.winner === "number" ||
          typeof parsed.winner === "string") &&
        parsed?.analysis &&
        typeof parsed.analysis === "string"
      ) {
        result = {
          winner: Number(parsed.winner),
          analysis: parsed.analysis,
        };
      }
    }
  } catch (error) {}

  return result;
};
