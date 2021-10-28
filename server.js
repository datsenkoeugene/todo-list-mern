const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const todosRouter = require('./routes/api/todos')
const connectDB = require('./config/db')

dotenv.config({ path: './config/config.env' })

connectDB()

app.use(bodyParser.json())

const PORT = process.env.PORT || 5000

app.use('/client/src/', express.static(path.join(__dirname, 'public')))

app.use('/api/todos', todosRouter)

app.listen(PORT, () => console.log(`Server started on ${PORT} port...`))
