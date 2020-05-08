const Reminder = require('./../models/reminderModel')

exports.getReminders = async (req, res, next) => {
  try {
    const results = await Reminder.find()
    res.send(results)
  } catch (error) {
    console.log(error.message)
  }
  next()
}

exports.createReminder = async (req, res, next) => {
  try {
    const { title } = req.body
    const newReminder = await Reminder.create({
      title: title,
      isDone: false
    })
    res.send('New Reminder Created!')
  } catch (error) {
    console.log(error.message)
  }
  next()
}

exports.updateReminder = async (req, res, next) => {
  try {
    const { id, isDone } = req.body
    const result = await Reminder.findById(id)
    const updateReminder = await Reminder.updateOne(
      { _id: id },
      { isDone: isDone }
    )
    res.send('Reminder Updated')
  } catch (error) {
    console.log(error.message)
  }
  next()
}

exports.deleteReminder = async (req, res, next) => {
  try {
    const { id } = req.body
    const result = await Reminder.findById(id)
    const deleteReminder = await Reminder.deleteOne({ _id: id })
    res.send('Reminder Deleted')
  } catch (error) {
    console.log(error.message)
  }
  next()
}
