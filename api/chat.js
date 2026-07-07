/**
 * Vercel 서버리스 함수 — Upstage Chat Completions 프록시
 * 요청 body의 messages 배열을 Upstage API에 그대로 전달
 */

const UPSTAGE_API_URL = "https://api.upstage.ai/v1/chat/completions";
const UPSTAGE_MODEL = "solar-pro3";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.UPSTAGE_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Server configuration error" });
  }

  const { messages } = req.body;

  if (!Array.isArray(messages) || messages.length === 0) {
    return res.status(400).json({ error: "messages array is required" });
  }

  try {
    const upstageResponse = await fetch(UPSTAGE_API_URL, {
      method: "POST",
      headers: {
        Authorization: "Bearer " + apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: UPSTAGE_MODEL,
        messages: messages,
      }),
    });

    const data = await upstageResponse.json();
    return res.status(upstageResponse.status).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Failed to reach Upstage API" });
  }
}
