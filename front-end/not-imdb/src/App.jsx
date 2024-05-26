import { useState, useEffect } from "react";
import * as movieService from "./services/movieService.js";
import HomePage from "./components/HomePage/HomePage.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";
import MovieForm from "./components/MovieForm/MovieForm.jsx";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  // const [view, setView] = useState('home');

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
  }

  return (
    <div>
      {/* {selectedMovie ? ( // Conditional rendering based on whether a movie is selected
        <MovieDetails selectedMovie={selectedMovie} />
      ) : (
        <HomePage movieList={movieList} setSelectedMovie={setSelectedMovie} />
      )} */}
      <h1>Definitely Not IMDB</h1>
      <MovieForm handleAddMovie={handleAddMovie} />
      <MovieDetails selectedMovie={selectedMovie} />
      <HomePage movieList={movieList} setSelectedMovie={setSelectedMovie} />
    </div>
  );
};

export default App;
