const mongoose = require('mongoose');

const ReminderSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required!"],
        minLength: [2, "Name must be at least 2 characters!"]
    },
    dueDate: {
        type: Date
    },
    notes: {
        type: String
    },
    completed: {
        type: Boolean,
        default: false
    }
},
    {timestamps: true});

const Reminder = mongoose.model('Reminder', ReminderSchema);
module.exports = Reminder;