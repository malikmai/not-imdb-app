import { useState } from "react";
import * as movieService from './services/movieService.js'
import { useEffect } from "react";

const App = () => {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await movieService.index();
      setMovieList(data)
    }
    fetchMovies();
  }, []);

  
  return (
    <> 
    <h1>Welcome to the Not-International-Movie-Database!</h1>
    </>
  )
};

export default App;