const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RideSchema = new Schema ({
    title: String,
    id: mongoose.Types.ObjectId,
    wait_time: Number,
    ride_speed: Number,
    ride_height: Number,
    description: String,
    ride_duration: Number,
    reviews: [ReviewSchema]
}, {timestamps: true})

const ReviewSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timeStamps: true
});


module.exports = mongoose.model('Ride', RideSchema)
