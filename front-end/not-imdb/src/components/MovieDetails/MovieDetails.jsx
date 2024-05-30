const MovieDetails = ({ selectedMovie, handleDeleteConfirmation, showUpdateForm, setView }) => {
  if (!selectedMovie) {
    return (
      <div>
        <p>Click the movie name to view details!</p>  
      </div>
    );
  }

  // const handleDeleteConfirmation = (movieId) => {
  //   if (window.confirm("Are you sure you want to delete this movie?")) {
  //     handleDeleteMovie(movieId);
  //   }
  // };

  return (
    <div className="movie-details">
      <img src={selectedMovie.poster} alt={`${selectedMovie.title} Poster`} className="movie-poster" />
      <div className="movie-info">
        <h1>{selectedMovie.title}</h1>
        <h2>Directed By: {selectedMovie.director}</h2>
        <h2>Released: {selectedMovie.year}</h2>
        <h2>Genre: {selectedMovie.genre}</h2>
        {/* Clicking this button toggles the updateMovie form */}
        <button onClick={() => showUpdateForm(true)}>Update Movie Details</button>
        {/* Clicking this button takes user to delete confirmation page */}
        <button onClick={() => handleDeleteConfirmation(selectedMovie._id)}>Delete Movie from Database</button>
        {/* Clicking this button sets view to list to render the movieList */}
        <button onClick={() => setView('list')}>Back to Movies</button>
      </div>
    </div>
  );
};

export default MovieDetails;
