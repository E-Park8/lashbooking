const { model, Schema } = require('mongoose')

//will fill in type of services offered when information is presented by client
const Appointment = new Schema({
    date: {
        type: Date,
        required: true
    },
    service: {
        type: String,
        required: true
    },
    client: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true })

module.exports = model('Appointment', Appointment)