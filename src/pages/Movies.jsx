import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import Searchbar from "components/Searchbar/Searchbar";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { MoviesList } from "components/MovieList/MovieList";


const Movies = () => {
  const [queryMovies, setQueryMovies] = useState('');
  const [movies, setMovies] = useState([]);
    // const [page, setPage] = useState(1);   

  const handleFormSubmit = (query) => {
    if (query === queryMovies) {
      return toast.info('🦄 Please enter a new word to search.');
    }

    setQueryMovies(query);
    // setMovies([]);
    // setPage(1);
    // setIsLoading(false);
  };
    
  useEffect(() => {
    if (queryMovies === '') {
      return;
    }
      
    const controller = new AbortController();
    try {
      (async function fetchMovies() {
        const nextMovies = await TheMoviedb.fetchMoviesByQuery(queryMovies);
        // console.log(nextMovies)
        setMovies([...nextMovies]);
      })();
    } catch (error) {
      console.error(error);
    };

    return () => {
      controller.abort();
    };

  }, [queryMovies]);

    return (
        <main>
            <Searchbar onSearch={handleFormSubmit} />
            <MoviesList movies={movies}></MoviesList>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </main>
    )
}

export default Movies;