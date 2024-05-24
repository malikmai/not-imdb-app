const HomePage = ({movieList, setSelectedMovie}) => {
    // const movies = props.movieList.map((movie) => (
    //     <a key={movie._id} onClick={() => props.updateSelected(movie)}><li>{movie.title}</li></a>
    //     <li key={movie._id} onClick={() => props.updateSelected(movie)}><a>{movie.title}</a></li>
    // ));

    const handleClick = (movie) => {
        setSelectedMovie(movie);
    }

    return (
        <div>
            <h1>Definitely Not IMDB</h1>
            <ul>{movieList.map((movie) => {return (<li key={movie._id}><a onClick={() => handleClick(movie)}>{movie.title}</a></li>)})}</ul>
        </div>
    )
}

export default HomePage;