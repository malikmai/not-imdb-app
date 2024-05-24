

const HomePage = (props) => {
    const handleClick = (event, movie) => {
        event.preventDefault();
        props.updateSelected(movie)
    }
    const movies = props.movieList.map((movie) => (
        <a href="" key={movie._id} onClick={(event) => handleClick(event, movie)}>
            <li>{movie.title}</li>
        </a>
    ));

    return (
        <>
        <h1>Definitely Not IMDB</h1>
        <ul>{movies}</ul>
        </>
    )
}

export default HomePage;