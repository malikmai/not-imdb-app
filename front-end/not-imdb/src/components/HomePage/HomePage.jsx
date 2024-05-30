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

  // useEffect hook to set up an interval for changing slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % 5); // Loops through the 5 slides, %5 ensures it doesn't go over 5
    }, 6000); // Changes the slide every 6 seconds
    return () => clearInterval(interval);
  }, []);

  // Movie images
  const placeholderImages = [
    "https://film-grab.com/wp-content/uploads/2019/11/Star-Wars-The-Phantom-Menace-050.jpg",
    "https://variety.com/wp-content/uploads/2013/05/bladerunner_sequel.jpg",
    "https://film-grab.com/wp-content/uploads/photo-gallery/imported_from_media_libray/thematrix015.jpg?bwg=1546895512",
    "https://images5.alphacoders.com/681/thumbbig-681188.webp",
    "https://images2.minutemediacdn.com/image/upload/c_fill,w_720,ar_16:9,f_auto,q_auto,g_auto/shape/cover/sport/57f586e0f2ad8b86abf5543de84abe362bb4ec711fe6a2b44226a84e0fed16d8.jpg"
  ];
  
  // Movie names corresponding to the images
  const movieNames = [
    "Star Wars: The Phantom Menace",
    "Blade Runner",
    "The Matrix",
    "Gladiator",
    "Jurassic Park"
  ];

  return (
    <div className="theNavSection">
      <hr />
      <main>
        <div className="welcome-message">
          <h1>Welcome to Definitely <i>not</i> IMDB</h1>
          <p>Your one-stop shop for all things movies!</p>
        </div>

        {/* Carousel section */}
        <div className="show-card">
          <img
            src={placeholderImages[currentSlide]} 
            alt={`Slide ${currentSlide + 1}`}
            className="resized-image" // Apply the resized-image class here
          />
          <div className="text-box">
            <p>{movieNames[currentSlide]}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;