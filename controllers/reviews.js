///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const express = require('express')
const {Reviews} = require('../models')
// we can use 'object de-structuring' to access just the model we need for this controller

// Reviews INDEX ACTION
async function index(req,res,next) {
	try {
    // get all Reviews
    res.json(await Reviews.find({}));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Reviews CREATE ACTION
async function create(req,res,next) {
  try {
    // create new person
    res.json(await Reviews.create(req.body));
  } catch (error) {
    //send error
    res.status(400).json(error);
  }
};

// Reviews SHOW ACTION
async function show(req,res,next) {
    try {
        // send one person
        res.json(await Reviews.findById(req.params.id));
      } catch (error) {
        //send error
        res.status(400).json(error);
      }
};


// Reviews DESTROY ACTION
async function destroy(req,res,next) {
    try {
      // delete Reviews by ID
      res.json(await Reviews.findByIdAndDelete(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  };
  
  // Reviews UPDATE ACTION
  async function update(req,res,next) {
    try {
      // update Reviews by ID, provide the form data, and return the updated document.
      res.json(
        await Reviews.findByIdAndUpdate(req.params.id, req.body, {new:true})
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