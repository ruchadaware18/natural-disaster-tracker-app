import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY});

app.post('/generate-summary', async (req, res) => {
  const { title, category, date } = req.body;

  if (!title || !category || !date) {
    return res.status(400).json({ summary: "Invalid input provided." });
  }

  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{
        role: 'user',
        content: `Summarize this event:\nTitle: ${title}\nCategory: ${category}\nDate: ${date}`
      }]
    });

    const summary = response.choices?.[0]?.message?.content;
    if (!summary) throw new Error("No summary returned.");

    res.json({ summary });
  } catch (error) {
    console.error("OpenAI Error:", error.response?.data || error.message || error);
    res.status(500).json({ summary: "Could not generate summary." });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

