import { useState } from "react";

const MovieForm = (props) => {
    const [formData, setFormData] = useState({
        title: '',
        director: '',
        genre: '',
        year: '',
    });

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.handleAddMovie(formData);
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name"> Title </label>
          <input
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <label htmlFor="age"> Director </label>
          <input
            id="director"
            name="director"
            value={formData.director}
            onChange={handleChange}
          />
          <label htmlFor="breed"> Genre </label>
          <input
            id="genre"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
          />
          <button type="submit">Add New Movie</button>
        </form>
      </div>
    );
};

export default MovieForm;