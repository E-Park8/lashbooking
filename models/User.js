const { model, Schema } = require('mongoose')

const User = new Schema ({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    appointments: [{
        type: Schema.Types.ObjectId,
        ref: 'Appointment'
    }]
}, { timestamps: true })

// User.plugin(require('passport-local-mongoose'))

module.exports = model('User', User)