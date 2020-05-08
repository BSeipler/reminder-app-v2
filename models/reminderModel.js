const mongoose = require('mongoose')

const reminderSchema = mongoose.Schema({
  title: String,
  isDone: Boolean
})

module.exports = mongoose.model('Reminder', reminderSchema)
