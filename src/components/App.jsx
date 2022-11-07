import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { Layout } from "./Layout/Layout";
import { Movies } from "./Movies/Movies";
import { MoviesDetails } from "./MoviesDetails/MoviesDetails";
// import { MoviesDetailsItem } from "./MoviesDetails/MoviesDetailsItem";

export const App = () => {
  const [movies, setMovies] = useState([]); 
  const [trendingStatus, setTrendingStatus] = useState(false);

    useEffect(() => {
    const controller = new AbortController();
    try {
      (async function fetchMovies() {
        const trendingMovies = await TheMoviedb.fetchTrendingMovies();
        console.log(trendingMovies);
        setMovies(trendingMovies);
      })();
    } catch(error) {
        console.error(error);
      };

    setTrendingStatus(true);
        return () => {
        controller.abort()
    };
    }, []);

  return (
    <>
    <Routes>
      <Route path='/' element={<Layout>Layout</Layout>}>
        <Route path='home' element={<MoviesDetails trendingStatus={trendingStatus} movies={movies} />}></Route>
        <Route path='movies' element={<Movies >Movies</Movies>}></Route>
          <Route path=':movieId' element={<MoviesDetails />}>
          <Route path='cast' element={<div>Cast</div>}></Route>
          <Route path='reviews' element={<div>Reviews</div>}></Route>
        </Route>
        <Route path="*" element={<div>Not found page! Please reload the site!</div>}></Route>
      </Route>
      </Routes>

    </>
  );
};
