const MovieList = ({ movieList, setSelectedMovie, setView }) => {
  const handleClick = (event, movie) => {
    event.preventDefault();
    setSelectedMovie(movie);
    setView("details"); // Switches view to the movie details page
  };

  return (
    <div className="movie-list">
    {/* Maps through the movieList array to create movie cards */}
      {movieList.map((movie) => (
        <div key={movie._id} className="movie-card" onClick={(event) => handleClick(event, movie)}>
          <img src={movie.poster} alt={movie.title} />
          <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.year}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;