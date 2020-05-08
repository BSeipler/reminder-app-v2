const express = require('express')
const router = express.Router()
const reminderController = require('./../controllers/reminderController')
const {
  getReminders,
  createReminder,
  updateReminder,
  deleteReminder
} = reminderController

router
  .route('/')
  .get(getReminders)
  .post(createReminder)
  .patch(updateReminder)
  .delete(deleteReminder)

module.exports = router
