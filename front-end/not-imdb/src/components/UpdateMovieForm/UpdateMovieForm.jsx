import { useState, useEffect } from "react";

const UpdateMovieForm = ({selectedMovie, handleUpdateMovie}) => {
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        year: '',
      });
    
      useEffect(() => {
        if (selectedMovie) {
          setFormData({
            title: selectedMovie.title,
            director: selectedMovie.director,
            genre: selectedMovie.genre,
            year: selectedMovie.year,
          });
        }
      }, [selectedMovie]);

      const handleUpdate = (event) => {
        setFormData({...formData, [event.target.name]: event.target.value});
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        handleUpdateMovie(formData, selectedMovie._id);
      };

      return (
        <div>
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
            <button type="submit">Update Movie</button>
          </form>
        </div>
      );
};

export default UpdateMovieForm;