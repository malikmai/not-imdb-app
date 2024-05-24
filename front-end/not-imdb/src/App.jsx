import { useState } from "react";
import * as movieService from './services/movieService.js'
import { useEffect } from "react";
import HomePage from "./components/HomePage/HomePage.jsx";

const App = () => {
  const [movieList, setMovieList] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.index();
      setMovieList(data)
    }
    fetchMovies();
  }, []);

  const updateSelected = (movie) => {
    setSelectedMovie(movie);
  };
  
  return (
    <> 
    <HomePage movieList={movieList} updateSelected={updateSelected} />
    </>
  )
};

export default App;