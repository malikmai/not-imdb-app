import { useState, useEffect } from "react";
import * as movieService from './services/movieService.js'
import HomePage from "./components/HomePage/HomePage.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState({});

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
  
  return (
    <> 
    <HomePage movieList={movieList} setSelectedMovie={setSelectedMovie} />
    <MovieDetails selectedMovie={selectedMovie} />
    </>
  )
};

export default App;