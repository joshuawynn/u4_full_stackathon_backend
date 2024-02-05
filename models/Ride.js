const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
    timestamps: true
});


const RideSchema = new Schema ({
    title: String,
    wait_time: String,
    ride_speed: String,
    ride_height: String,
    description: String,
    ride_duration: String,
    reviews: [ReviewSchema]
}, {timestamps: true})


module.exports = mongoose.model('Ride', RideSchema)
