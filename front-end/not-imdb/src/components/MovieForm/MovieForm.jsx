import { useState } from "react";

const MovieForm = ({ handleAddMovie }) => {
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    year: "",
    poster: "", // Added poster field
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted', formData);
    handleAddMovie(formData);
  };

  return (
    <div className="movie-form-container">
      <div className="movie-form">
        <h2>Add Your Favs Here</h2>
        <hr />
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="director">Director</label>
          <input
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
          <label htmlFor="genre">Genre</label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
          <label htmlFor="year">Year</label>
          <input
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
          />
          <label htmlFor="poster">Poster</label>
          <input
            id="poster"
            name="poster"
            value={formData.poster}
            onChange={handleChange}
            placeholder="paste image address here"
          />
          <button type="submit">Add New Movie</button>
        </form>
      </div>
    </div>
  );
};

export default MovieForm;
