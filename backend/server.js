const express = require('express')
const cors = require('cors')
const routes = require('./routes')
const dotenv = require('dotenv')
const openai = require('openai')

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
app.use('/api', routes)

const PORT = process.env.PORT || 8000
const openaiAPIKey = process.env.OPENAI_API_KEY
const openaiClient = new openai({key:openaiAPIKey})

app.listen(PORT, () => console.log('Your Server is running on PORT ' + PORT))



