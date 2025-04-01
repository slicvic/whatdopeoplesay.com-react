import axios from "axios";
import { AIResults, SearchTerm } from "../types/types";

const API_KEY = "AIzaSyCUePWyqyham0elOS5g9_0nsntCRcEGCS4";
const BASE_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${API_KEY}`;
const PROMPT = `
Analyze and rank the following expressions based on their historical level of general acceptance and widespread use.

Expressions to rank:

{{QUERY}}

Provide a structured JSON object with the following keys:

- "winner": The number corresponding to the expression with the highest level of general acceptance and widespread use.
- "analysis": A concise justification for your ranking.
`;

const preparePrompt = (searchTerms: SearchTerm[]): string => {
  const prompt = PROMPT.replace(
    "{{QUERY}}",
    searchTerms.map((term, index) => `${index + 1}. ${term}`).join("\n")
  );
  return prompt;
};

export const askAI = async (
  searchTerms: SearchTerm[]
): Promise<AIResults | null> => {
  let result = null;
  const prompt = preparePrompt(searchTerms);

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
  } catch (error) {
    console.log(error);
  }

  return result;
};
