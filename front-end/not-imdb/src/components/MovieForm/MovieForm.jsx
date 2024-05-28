import { useState } from "react";

const MovieForm = ({ handleAddMovie }) => {
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
        handleAddMovie(formData);
    };

    return (
        <div>
            <hr />
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"> Title </label>
                <input
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="director"> Director </label>
                <input
                    id="director"
                    name="director"
                    value={formData.director}
                    onChange={handleChange}
                />
                <label htmlFor="genre"> Genre </label>
                <input
                    id="genre"
                    name="genre"
                    value={formData.genre}
                    onChange={handleChange}
                />
                <label htmlFor="year"> Year </label>
                <input
                    id="year"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                />
                <button type="submit">Add New Movie</button>
            </form>
        </div>
    );
};

export default MovieForm;
