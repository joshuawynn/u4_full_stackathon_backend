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
    waitTime: String,
    picture: String,
    rideSpeed: String,
    rideHeight: String,
    description: String,
    rideDuration: String,
    reviews: [ReviewSchema]
}, {timestamps: true})


module.exports = mongoose.model('Ride', RideSchema)
