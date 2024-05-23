# Movies API Backend

## Overview

This project is a Movies API backend built with Express, Mongoose, and MongoDB. It provides CRUD operations for managing a collection of movies. The frontend, which will be developed separately using Vite and React, can interact with this backend to display and manage movie data.

## Project Structure
movies-api-backend/
│
├── controllers/
│   └── movieController.js
├── models/
│   └── Movie.js
├── routes/
│   └── movies.js
├── .env
├── package.json
└── server.js

## Prerequisites

- Node.js (>= 12.x)
- npm (>= 6.x)
- MongoDB (local or cloud instance)

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/malikmai/movies-api-backend.git
   cd movies-api-backend

2. **Install dependencies:**
   ```bash
   npm install

3. **Set up environment variables:**
    Create a .env file in the root directory of the project with the following content:

    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/not-imdb

4. **Start the server:**
    ```bash
    node server.js

## Project Details

**Server.js**

The main entry point of the application. It sets up the Express server, connects to the MongoDB database, and configures middleware.

**controllers/movieController.js**

Contains the controller functions that handle the CRUD operations for movies. Each function interacts with the Movie model to perform database operations.

**models/Movie.js**

Defines the Movie schema and model using Mongoose. The schema includes fields for title, director, genre, and year.

**routes/movies.js**

Defines the routes for the Movies API and maps them to the corresponding controller functions.

## Testing the API

Use Postman or any other API testing tool to test the endpoints.