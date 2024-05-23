// Description: This file contains the server setup and configuration.
// server.js

const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const cors = require('cors');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log(`connected to MongoDB: ${mongoose.connection.name}`);
});

app.use(cors());
app.use(express.json());

const moviesRoutes = require('./routes/movies');
app.use('/movies', moviesRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});