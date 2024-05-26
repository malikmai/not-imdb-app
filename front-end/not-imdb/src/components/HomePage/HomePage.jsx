const HomePage = ({ movieList, setSelectedMovie }) => {
  const movies = movieList.map((movie) => (
    <li key={movie._id} onClick={() => setSelectedMovie(movie)}><a>{movie.title}</a></li>
  ));

  const handleClick = (event, movie) => {
    event.preventDefault();
    setSelectedMovie(movie);
  }

  return (
    <div>
      <ul>{movieList.map((movie) => { return (<li key={movie._id}><a href="" onClick={() => handleClick(event, movie)}>{movie.title}</a></li>) })}</ul>
    </div>
  )
};

export default HomePage;
// ---- Umang's code ----

//---- Malik's Updates ----
// import React, { useState, useEffect } from "react";

// const HomePage = ({ movieList, setSelectedMovie }) => {
//   const [menuOpen, setMenuOpen] = useState(false); // Keeps track of whether the menu is open or closed
//   const [searchQuery, setSearchQuery] = useState(""); // Keeps track of the search query
//   const [currentSlide, setCurrentSlide] = useState(0); // Keeps track of the current slide

//   const handleClick = (movie) => {
//     setSelectedMovie(movie);
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen); // Toggles the menu open and closed
//   };

//   const handleSearch = (event) => {
//     setSearchQuery(event.target.value); // Updates the search query based on the input
//   };

//   const filteredMovies = movieList.filter((movie) =>
//     movie.title.toLowerCase().includes(searchQuery.toLowerCase()) // Filters the movies based on the search query
//   );

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Loops through the 5 slides, %5 ensures it doesn't go over 5
//     }, 6000); // Changes the slide every 6 seconds
//     return () => clearInterval(interval);
//   }, []);

//   const placeholderImages = [
//     "https://via.placeholder.com/400x200?text=Movie+1", // Placeholder image URLs
//     "https://via.placeholder.com/400x200?text=Movie+2",
//     "https://via.placeholder.com/400x200?text=Movie+3",
//     "https://via.placeholder.com/400x200?text=Movie+4",
//     "https://via.placeholder.com/400x200?text=Movie+5"
//   ];

//   return (
//     <div>
//     <div className="theNavSection">
//       <nav className="navbar">
//         <div className="hamburger" onClick={toggleMenu}>
//           ☰ 
//         </div>
//         {menuOpen && (
//           <ul className="nav-links">
//             <li>
//               <a href="#add">Add New Movie</a>
//             </li>
//             <li>
//               <a href="#view">View Movies</a>
//             </li>
//             <li>
//               <a href="#update">Update Movies</a>
//             </li>
//           </ul>
//         )}
//         <div className="site-title">Definitely <i>not</i> IMDB</div>
//         <div className="search-bar">
//           <input
//             type="text"
//             placeholder="Search Movies..."
//             value={searchQuery}
//             onChange={handleSearch} // Calls the handleSearch function when the input changes
//           />
//         </div>
//       </nav>
//       <hr></hr>
//       </div>
//       <main>
//         <div className="welcome-message">
//             <h1>Welcome to Definitely <i>not</i> IMDB</h1>
//             <p>Your one-stop shop for all things movies!</p>
//         </div>
//         <div className="show-card">
//           <img
//             src={placeholderImages[currentSlide]}
//             alt={`Slide ${currentSlide + 1}`} // Displays the current slide image
//           />
//         </div>
//       </main>
//     </div>
//   );
// };

// export default HomePage;