const MovieDetails = ({ selectedMovie, handleDeleteMovie, showUpdateForm, setView }) => {
  if (!selectedMovie) {
    return (
      <div>
        <p>Click the movie name to view details!</p>  
      </div>
    );
  }

  return (
    <div className="movie-details">
      <img src={selectedMovie.poster} alt={`${selectedMovie.title} Poster`} className="movie-poster" />
      <div className="movie-info">
        <h1>{selectedMovie.title}</h1>
        <h2>Directed By: {selectedMovie.director}</h2>
        <h2>Released: {selectedMovie.year}</h2>
        <h2>Genre: {selectedMovie.genre}</h2>
        <button onClick={() => showUpdateForm(true)}>Update Movie Details</button>
        <button onClick={() => handleDeleteMovie(selectedMovie._id)}>Delete Movie from Database</button>
      </div>
    </div>
  );
};

export default MovieDetails;
