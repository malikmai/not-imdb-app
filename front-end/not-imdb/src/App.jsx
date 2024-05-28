import { useState, useEffect } from "react";
import * as movieService from "./services/movieService.js";
import HomePage from "./components/HomePage/HomePage.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import MovieForm from "./components/MovieForm/MovieForm.jsx";
import UpdateMovieForm from "./components/UpdateMovieForm/UpdateMovieForm.jsx";
import MovieList from "./components/MovieList/MovieList.jsx";
// import './App.css'

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [view, setView] = useState('home');
  const [searchQuery, setSearchQuery] = useState(""); // Keeps track of the search query
  const [menuOpen, setMenuOpen] = useState(false); // Keeps track of whether the menu is open or closed


  const handleSearch = (event) => {
    setSearchQuery(event.target.value); // Updates the search query based on the input
  };

  const toggleMenu = (event) => {
    event.preventDefault();
    setMenuOpen(!menuOpen); // Toggles the menu open and closed
  };

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
  }

  const filteredMovies = movieList.filter(movie => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.director.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.genre.toLowerCase().includes(searchQuery.toLowerCase()) ||
    movie.year.toString().includes(searchQuery)
  );

  return (
    <div>
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
      <div className="search-bar">
          <input
            type="text"
            placeholder="Search Movies..."
            value={searchQuery}
            onChange={handleSearch} // Calls the handleSearch function when the input changes
          />
      </div>
      {view === 'home' && (
        <HomePage />
      )}
      {view === 'list' && (
        <MovieList movieList={filteredMovies} setSelectedMovie={setSelectedMovie} setView={setView} />
      )}
      {view === 'add' && (
        <MovieForm handleAddMovie={handleAddMovie} />
      )}
      {showUpdateForm ? (<UpdateMovieForm selectedMovie={selectedMovie} handleUpdateMovie={handleUpdateMovie} />
      ) : (
        view === 'details' && (
          <MovieDetails selectedMovie={selectedMovie} handleDeleteMovie={handleDeleteMovie} showUpdateForm={setShowUpdateForm} />)
      )}
    </div>
  );
};

export default App;
