import { useState, useEffect } from "react";

const UpdateMovieForm = ({ selectedMovie, handleUpdateMovie }) => {
  const [formData, setFormData] = useState({
    title: '',
    director: '',
    genre: '',
    year: '',
    poster: '', // Added poster field
  });

  useEffect(() => {
    if (selectedMovie) {
      setFormData({
        title: selectedMovie.title,
        director: selectedMovie.director,
        genre: selectedMovie.genre,
        year: selectedMovie.year,
        poster: selectedMovie.poster, // Added poster field
      });
    }
  }, [selectedMovie]);

  const handleUpdate = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateMovie(formData, selectedMovie._id);
  };

  return (
    <div className="movie-form-container">
      <div className="movie-form">
        <h2>Update Movie</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleUpdate}
            required
          />
          <label htmlFor="director">Director</label>
          <input
            id="director"
            name="director"
            value={formData.director}
            onChange={handleUpdate}
          />
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleUpdate}
          />
          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            value={formData.year}
            onChange={handleUpdate}
          />
          <label htmlFor="poster">Poster</label>
          <input
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleUpdate}
            placeholder="paste image address here"
          />
          <button type="submit">Update Movie</button>
        </form>
      </div>
    </div>
  );
};

export default UpdateMovieForm;
