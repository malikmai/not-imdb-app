// const HomePage = ({ movieList, setSelectedMovie, setView }) => {
//   const handleClick = (event, movie) => {
//     event.preventDefault();
//     setSelectedMovie(movie);
//     setView('details');
//   };

//   return (
//     <div>
//       <ul>
//         {movieList.map((movie) => (
//           <li key={movie._id}>
//             <a href="#" onClick={(event) => handleClick(event, movie)}>
//               {movie.title}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default HomePage;
// ---- Umang's code ---- Moved to its own component MovieList ----

// ---- Malik's Updates ----
import { useState, useEffect } from "react";

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Keeps track of the current slide

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Loops through the 5 slides, %5 ensures it doesn't go over 5
    }, 6000); // Changes the slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  const placeholderImages = [
    "https://via.placeholder.com/400x200?text=Movie+1", // Placeholder image URLs
    "https://via.placeholder.com/400x200?text=Movie+2",
    "https://via.placeholder.com/400x200?text=Movie+3",
    "https://via.placeholder.com/400x200?text=Movie+4",
    "https://via.placeholder.com/400x200?text=Movie+5"
  ];

  return (
    <div className="theNavSection">
      <hr />
      <main>
        <div className="welcome-message">
            <h1>Welcome to Definitely <i>not</i> IMDB</h1>
            <p>Your one-stop shop for all things movies!</p>
        </div>
        <div className="show-card">
          <img
            src={placeholderImages[currentSlide]}
            alt={`Slide ${currentSlide + 1}`} // Displays the current slide image
          />
        </div>
      </main>
    </div>
  );
};

export default HomePage;