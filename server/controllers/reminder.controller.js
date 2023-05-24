const Reminder = require('../models/reminder.model');

module.exports.findAllReminders = (req, res) => {
    Reminder.find({})
        .then(allReminders => {
            res.json(allReminders);
            console.log(res)
        })
        .catch(err => res.json(err))
}

module.exports.findOneReminderById = (req, res) => {
    Reminder.findById({_id: req.params.id})
        .then(reminder => res.json(reminder))
        .catch(err => res.json(err))
}

module.exports.createReminder = (req, res) => {
    Reminder.create(req.body)
        .then(reminder => res.json(reminder))
        .catch(err => res.json(err))
}

module.exports.updateReminder = (req, res) => {
    Reminder.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedReminder => res.json(updatedReminder))
        .catch(err => res.json(err))
}

module.exports.completeReminder = (req, res) => {
    Reminder.findByIdAndUpdate({_id: req.params.id}, req.body, {new:true, runValidators:true})
        .then(updatedReminder => res.json(updatedReminder))
        .catch(err => res.json(err))
}

module.exports.deleteReminder = (req, res) => {
    Reminder.findByIdAndDelete(req.params.id)
        .then(confirmedDelete => res.json(confirmedDelete))
        .catch(err => res.json(err))
}