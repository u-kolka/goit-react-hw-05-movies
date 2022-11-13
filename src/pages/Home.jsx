import { useState, useEffect } from "react";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesList } from "components/MovieList/MovieList";

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [trendingStatus, setTrendingStatus] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        try {
            (async function fetchMovies() {
                const trendingMovies = await TheMoviedb.fetchTrendingMovies();
                setMovies(trendingMovies);
            })();
        } catch (error) {
            console.error(error);
        };

        setTrendingStatus(true);
        return () => {
            controller.abort()
        };
    }, []);

    return (
        <MoviesList trendingStatus={trendingStatus} movies={movies} />
    )
}

export default Home;