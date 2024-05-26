const MovieDetails = (props) => {
    if (!props.selectedMovie)
      return (
        <div>
          <p>Click the movie name to view details!</p>  
        </div>
      );
  
    return (
      <div>        
        <h1>{props.selectedMovie.title}</h1>
        <h2>Directed By: {props.selectedMovie.director}</h2>
        <h2>Released: {props.selectedMovie.year}</h2>
      </div>
    );
  };
  
  export default MovieDetails;