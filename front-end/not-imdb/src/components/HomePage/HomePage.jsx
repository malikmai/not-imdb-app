// const HomePage = ({movieList, setSelectedMovie}) => {
// const movies = props.movieList.map((movie) => (
//     <a key={movie._id} onClick={() => props.updateSelected(movie)}><li>{movie.title}</li></a>
//     <li key={movie._id} onClick={() => props.updateSelected(movie)}><a>{movie.title}</a></li>
// ));

//     const handleClick = (movie) => {
//         setSelectedMovie(movie);
//     }

//     return (
//         <div>
//             <h1>Definitely Not IMDB</h1>
//             <ul>{movieList.map((movie) => {return (<li key={movie._id}><a onClick={() => handleClick(movie)}>{movie.title}</a></li>)})}</ul>
//         </div>
//     )
// }

// export default HomePage;
// ---- Umang's code ----

//---- Malik's Updates ----
import React, { useState } from "react";

const HomePage = ({ movieList, setSelectedMovie }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClick = (movie) => {
    setSelectedMovie(movie);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredMovies = movieList.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <nav className="navbar">
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
        {menuOpen && (
          <ul className="nav-links">
            <li>
              <a href="#add">Add New Movie</a>
            </li>
            <li>
              <a href="#view">View Movies</a>
            </li>
            <li>
              <a href="#update">Update Movies</a>
            </li>
          </ul>
        )}
        <div className="site-title">Definitely Not IMDB</div>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search Movies..."
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
      </nav>
      <ul>
        {filteredMovies.map((movie) => (
          <li key={movie._id}>
            <a onClick={() => handleClick(movie)}>{movie.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
