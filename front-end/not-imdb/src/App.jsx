import { useState, useEffect } from "react";
import * as movieService from "./services/movieService.js";
import HomePage from "./components/HomePage/HomePage.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import MovieForm from "./components/MovieForm/MovieForm.jsx";
import UpdateMovieForm from "./components/UpdateMovieForm/UpdateMovieForm.jsx";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [view, setView] = useState('home');

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
      setShowUpdateForm(false)
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
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <nav>
        <button onClick={() => setView('list')}>Movie List</button>
        <button onClick={() => setView('add')}>Add New Movie</button>
      </nav>
      <h1>Definitely Not IMDB</h1>
      {view === 'list' && (
        <HomePage movieList={movieList} setSelectedMovie={setSelectedMovie} setView={setView} />
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
