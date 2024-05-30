import { useState, useEffect } from "react";
import * as movieService from "./services/movieService.js";
import HomePage from "./components/HomePage/HomePage.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import MovieForm from "./components/MovieForm/MovieForm.jsx";
import UpdateMovieForm from "./components/UpdateMovieForm/UpdateMovieForm.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation/DeleteConfirmation.jsx";
import Footer from "./components/Footer/Footer.jsx";
import './App.css'

const App = () => {
  const [movieList, setMovieList] = useState([]); // List of all movies
  const [selectedMovie, setSelectedMovie] = useState(null); // Currently selected movie
  const [showUpdateForm, setShowUpdateForm] = useState(false); // Toggle for update form visibility
  const [view, setView] = useState('home'); // Current view state
  const [searchQuery, setSearchQuery] = useState(""); // Keeps track of the search query input
  const [menuOpen, setMenuOpen] = useState(false); // Keeps track of whether the menu is open or closed
  const [searchResult, setSearchResult] = useState(""); //Keeps track of search results and helps display a message when movie not found

  // Handle search input change
  const handleSearchString = (event) => {
    setSearchQuery(event.target.value); // Updates the search query based on the input
  };

  // Handle search button click
  const handleSearch = (event) => {
    event.preventDefault();
    const searchMovie = movieList.find(movie => 
      movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
      movie.year.toString().includes(searchQuery)
    );

    if (searchMovie) {
      setSelectedMovie(searchMovie);
      setView('details');
      setSearchResult("");
      setSearchQuery("");
    } else {
      setSearchResult('Movie not found :(')
    }
  }

  // Toggle menu open/close
  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen);
  };

  // Fetches all movies from the backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await movieService.index();
        if (movies.error) {
          throw new Error(movies.error);
        }
        setMovieList(movies);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovies();
  }, []);

  // Handles adding a new movie
  const handleAddMovie = async (FormData) => {
    try {
      const newMovie = await movieService.create(FormData);

      if (newMovie.error) {
        throw new Error(newMovie.error);
      }

      setMovieList([newMovie, ...movieList]);
      setView('list');
      setMenuOpen(false);
    } catch (error) {
      console.log(error);
    }
  };

  // Handles updating the selected movie
  const handleUpdateMovie = async (FormData, movieId) => {
    try {
      const updateMovie = await movieService.update(FormData, movieId);

      if (updateMovie.error) {
        throw new Error(updateMovie.error);
      }

      setMovieList(movieList.map((movie) => (movie._id === movieId ? updateMovie : movie)));
      setSelectedMovie(updateMovie);
      setShowUpdateForm(false);
      setView('details');
    } catch (error) {
      console.log(error);
    }
  };

  // Handles deleting a movie
  const handleDeleteMovie = async (movieId) => {
    try {
      const deleteMovie = await movieService.remove(movieId);

      if (deleteMovie.error) {
        throw new Error(deleteMovie.error);
      }

      setMovieList(movieList.filter((movie) => movie._id !== movieId));
      setSelectedMovie(null);
      setView('list');
    } catch (error) {
      console.log(error);
    }
  };

  // Shows delete confirmation page
  const handleDeleteConfirmation = () => {
    setView('delete');
  }

  // const filteredMovies = movieList.filter(movie => 
  //   movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
  //   movie.year.toString().includes(searchQuery)
  // );

  return (
    <div>
      {/* Code for hamburger navigation menu */}
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          ☰ 
        </div>
        {menuOpen && (
          <ul className="nav-links">
            <li>
              <a href="" onClick={(event) => {event.preventDefault(); setView('home'); setMenuOpen(false); }}>Home</a>
            </li>
            <li>
              <a href="" onClick={(event) => {event.preventDefault(); setView('list'); setMenuOpen(false); }}>View Movies</a>
            </li>
            <li>
              <a href="" onClick={(event) => {event.preventDefault(); setView('add'); setMenuOpen(false); }}>Add New Movie</a>
            </li>
          </ul>
        )}
      </nav>

      {/* Code for the search bar */}
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search Movies..."
            value={searchQuery}
            onChange={handleSearchString} // Calls the handleSearch function when the input changes
          />
          <button onClick={handleSearch}>Search</button>
          {searchResult && <p>{searchResult}</p>}
      </div>

      {/* Conditional rendering based on current view */}
      {view === 'home' && (
        // Render the HomePage component when the current view is 'home'
        <HomePage />
      )}
      {view === 'list' && (
        // Render the MovieList component when the current view is 'list'
        // Pass movieList, setSelectedMovie, and setView as props
        <MovieList movieList={movieList} setSelectedMovie={setSelectedMovie} setView={setView} />
      )}
      {view === 'add' && (
        // Render the MovieForm component when the current view is 'add'
        // Pass handleAddMovie as a prop
        <MovieForm handleAddMovie={handleAddMovie} />
      )}
      {showUpdateForm ? (
      // Render the UpdateMovieForm component if showUpdateForm is true
      // Pass selectedMovie and handleUpdateMovie as props
      <UpdateMovieForm selectedMovie={selectedMovie} handleUpdateMovie={handleUpdateMovie} />
      ) : (
        view === 'details' && (
          // Render the MovieDetails component when the current view is 'details'
          // Pass selectedMovie, showUpdateForm, handleDeleteConfirmation, and setView as prop
          <MovieDetails selectedMovie={selectedMovie} showUpdateForm={setShowUpdateForm} handleDeleteConfirmation={handleDeleteConfirmation} setView={setView} />)
      )}
      {view === 'delete' && (
        // Render the DeleteConfirmation component when the current view is 'delete'
        // Pass selectedMovie, handleDeleteMovie, and setView as props
        <DeleteConfirmation selectedMovie={selectedMovie} handleDeleteMovie={handleDeleteMovie} setView={setView} />
      )}
       <Footer />
    </div>
  );
};

export default App;