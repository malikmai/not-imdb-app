// Description: This file contains the Movie model.
// models/Movie.js

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  director: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  }
});

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;