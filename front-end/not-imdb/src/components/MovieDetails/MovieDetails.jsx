const MovieDetails = ({ selectedMovie }) => {
    if (!selectedMovie)
      return (
        <div>
          <p>Click the movie name to view details!</p>  
        </div>
      );
  
    return (
      <div>        
        <h1>{selectedMovie.title}</h1>
        <h2>Directed By: {selectedMovie.director}</h2>
        <h2>Released: {selectedMovie.year}</h2>
        <h2>Genre: {selectedMovie.genre}</h2>
      </div>
    );
  };
  
  export default MovieDetails;