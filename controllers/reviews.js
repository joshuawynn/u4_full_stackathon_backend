///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Ride} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller


// Reviews CREATE ACTION

async function create(req,res) {
    const ride = await Ride.findById(req.params.id)

    ride.reviews.push(req.body)
    try {
        // Save any changes made to the movie doc
        await ride.save();
      } catch (err) {
        res.status(400).json(err);  
      }
      // Step 5:  Respond to the Request (redirect if data has been changed)
 
    }



    async function deleteReview(req, res) {
        // Note the cool "dot" syntax to query on the property of a subdoc
        Ride.findOne({
          'reviews._id': req.params.id,
        }).then(function (ride) {
          if (!ride) return res.redirect('/rides');
          ride.reviews.remove(req.params.id);
          ride.save().then(function () {
            res.redirect(`/rides/${ride._id}`);
          }).catch(function (err) {
            return next(err);
          });
        });
      }

      module.exports = {
        create,
        delete: deleteReview
      };