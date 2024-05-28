const MovieList = ({ movieList, setSelectedMovie, setView }) => {
    const handleClick = (event, movie) => {
      event.preventDefault();
      setSelectedMovie(movie);
      setView('details');
    };
  
    return (
    
      <div>
        <hr />
        <ul>
          {movieList.map((movie) => (
            <li key={movie._id}>
              <a href="#" onClick={(event) => handleClick(event, movie)}>
                {movie.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default MovieList;