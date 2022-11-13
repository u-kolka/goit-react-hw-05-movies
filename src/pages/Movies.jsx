import { useState, useEffect } from "react";
import { useSearchParams, Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from "components/Searchbar/Searchbar";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesList } from "components/MoviesList/MoviesList";
import { Section } from "components/Layout/Layout.styled";

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    setSearchParams({ query: form.elements.query.value });
    form.reset();
  };

  useEffect(() => {
    if (query === '' || query === null) {
      return;
    };

    const controller = new AbortController();
    try {
      (async function fetchMovies() {
        const nextMovies = await TheMoviedb.fetchMoviesByQuery(query);
        setMovies([...nextMovies]);
      })();
    } catch (error) {
      console.error(error);
    };

    return () => {
      controller.abort();
    };
  }, [query]);

  return (
    <main>
      <Searchbar value={query} onSubmit={handleSubmit} />
      <Section>
        {movies && <MoviesList movies={movies}></MoviesList>}
        <Outlet></Outlet>
      </Section>
      <ToastContainer></ToastContainer>
    </main>
  )
};

export default Movies;