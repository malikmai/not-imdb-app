const MovieDetails = ({ selectedMovie, handleDeleteMovie, showUpdateForm }) => {
    if (!selectedMovie) {
      return (
        <div>
          <p>Click the movie name to view details!</p>  
        </div>
      );
    }
  
    return (
      <div>
        <hr />
        <h1>{selectedMovie.title}</h1>
        <h2>Directed By: {selectedMovie.director}</h2>
        <h2>Released: {selectedMovie.year}</h2>
        <h2>Genre: {selectedMovie.genre}</h2>
        <button onClick={() => showUpdateForm(true)}>Update Movie Details</button>
        <button onClick={() => handleDeleteMovie(selectedMovie._id)}>Delete Movie from Database</button>
      </div>
    );
  };
  
  export default MovieDetails;