const ReminderController = require('../controllers/reminder.controller');

module.exports = (app) => {
    app.get('/reminders', ReminderController.findAllReminders);
    app.get('/reminders/:id', ReminderController.findOneReminderById);
    app.post('/reminders/new', ReminderController.createReminder);
    app.patch('/reminders/:id/update', ReminderController.updateReminder);
    app.patch('/reminders/:id/complete', ReminderController.completeReminder);
    app.delete('/reminders/:id', ReminderController.deleteReminder);
}