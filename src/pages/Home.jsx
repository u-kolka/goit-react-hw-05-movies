import { useState, useEffect } from "react";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Layout/Layout.styled";

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
        <Section>
            <MoviesList trendingStatus={trendingStatus} movies={movies} />
        </Section>
    )
}

export default Home;