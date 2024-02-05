///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Ride} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// RIDES INDEX ACTION
async function index(req,res,next) {
	try {
    // get all Rides
    res.json(await Ride.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// RIDES CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Ride.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Rides SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Ride.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// Rides DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Rides by ID
      res.json(await Ride.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // Rides UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update Rides by ID, provide the form data, and return the updated document.
      res.json(
        await Ride.findByIdAndUpdate(req.params.id, req.body, {new:true})
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };

// EXPORT Controller Action
module.exports = {
	index,
	create,
	show,
    delete: destroy,
    update
}