const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new Schema ({
    title: String,
    id: mongoose.Types.ObjectId,
    wait_time: Number,
    ride_speed: Number,
    ride_height: Number,
    description: String,
    ride_duration: Number
}, {timestamps: true})

module.exports = mongoose.model('Ride', RideSchema)