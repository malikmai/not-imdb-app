// Description: This file contains the methods for the movie resource.
// controllers/movieController.js

const Movie = require('../models/Movie');

// Get all movies
const getMovies = async (req, res) => {
  try {
    const foundMovies = await Movie.find({});
    res.status(200).json(foundMovies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a single movie by ID
const getMovieById = async (req, res) => {
  try {
    const foundMovie = await Movie.findById(req.params.movieId);
    if (!foundMovie) {
      res.status(404);
      throw new Error("Movie not found.");
    }
    res.status(200).json(foundMovie);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Create a new movie
const createMovie = async (req, res) => {
  try {
    const createdMovie = await Movie.create(req.body);
    res.status(201).json(createdMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update a movie by ID
const updateMovie = async (req, res) => {
  try {
    const updatedMovie = await Movie.findByIdAndUpdate(
      req.params.movieId,
      req.body,
      {
        new: true,
      }
    );
    if (!updatedMovie) {
      res.status(404);
      throw new Error("Movie not found.");
    }
    res.status(200).json(updatedMovie);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

// Delete a movie by ID
const deleteMovie = async (req, res) => {
  try {
    const deletedMovie = await Movie.findByIdAndDelete(req.params.movieId);
    if (!deletedMovie) {
      res.status(404);
      throw new Error("Movie not found.");
    }
    res.status(200).json(deletedMovie);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = {
  getMovies,
  getMovieById,
  createMovie,
  updateMovie,
  deleteMovie
};