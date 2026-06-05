export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'No message' });
  try {
    const response = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.MISTRAL_API_KEY}`
      },
      body: JSON.stringify({
        model: 'mistral-small-latest',
        messages: [{ role: 'user', content: message }],
        max_tokens: 500,
        temperature: 0.3
      })
    });
    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'No response.';
    res.status(200).json({ reply });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
