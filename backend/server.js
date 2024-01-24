const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8000;

// Configure OpenAI API key
const API_KEY = process.env.OPENAI_API_KEY;

// 1 - Route to get all available fields to set up a startup
app.get('/startupFields', (req, res) => {
  const startupFields = ['Agriculture', 'Architecture', 'Beauty', 'E-Commerce', 'Education', 'E-Learning', 'Entertainment', 'Fashion', 'Finance', 'Fitness', 'Food', 'Games', 'Health and Wellness', 'Home', 'Human Resources', 'Logistics', 'Marketing', 'Marriage', 'Medicine', 'Mobility', 'Purchasing Management', 'Renewable Energy', 'Sales', 'Smart Cities', 'Social Politics', 'Sustainability', 'Technology', 'Tourism', 'Transportation'];
  res.json({ startupFields });
  console.log(startupFields);
});

// 2 - Route to get all 20 startup ideas based on the chosen field
app.post('/startupIdeas', async (req, res) => {
  const options = {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: req.body.message }],
      max_tokens: 500,
    })
  }
  try {
    const response = await fetch('https://api.openai.com/v1/chat/completions', options)
    const data = await response.json()
    res.send(data)
  } catch (error) {
    console.error(error)
  }
 })

app.listen(PORT, () => console.log('Your Server is running on PORT ' + PORT));