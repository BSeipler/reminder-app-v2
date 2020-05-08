require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const reminderRoute = require('./routes/reminderRoute')

const app = express()

const port = process.env.PORT

app.use(express.json())
app.use('/', reminderRoute)

// MongoDB connection
const mongo = async () => {
  try {
    const config = { useNewUrlParser: true, useUnifiedTopology: true }
    const connect = await mongoose.connect(
      process.env.MONGOOSE_CREDENTIALS,
      config
    )
    console.log('MongoDB Connected!')
  } catch (error) {
    console.log(error.message)
  }
}

// local server
app.listen(port, () => {
  mongo()
  console.log(`Listening on port ${port}`)
})
