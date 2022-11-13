import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";

import { posterParam } from '../config'
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";


const Reviews = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location.state.id)
  const MovieId = location.state.id;

  useEffect(() => {
    const controller = new AbortController();
    try {
      (async function fetchMovie() {
        const movie = await TheMoviedb.fetchMovieReviews(MovieId);
        setMovie(movie)
      })();
    } catch (error) {
      console.error(error);
    }
    return () => {
      controller.abort()
    };
  }, []);
  console.log(movie)
  if (!movie) {
    return null
  }

  // const { results } = movie;
  const { postersUrl, altProfileUrl, postersSize } = posterParam;
  return (
    <>
      {movie.results.length === 0 && <p>We don't have any reviews for this movie :( </p> ||
        <section>
          <ul>
            {movie.results.length > 0 && movie.results.map(({ id, author, author_details: { avatar_path }, content }) => {
              const src = (avatar_path === null) ? altProfileUrl :
                avatar_path.includes('/https') ? avatar_path.replace('/', '') :
                (`${postersUrl + postersSize + avatar_path}`);
              
              return (
                <li key={id}>
                  <img src={src} alt={author} width='100' />
                  <h3>{author}</h3>
                  <p>{content}</p>
                </li>)
            })}
          </ul>
        </section>}
    </>
  );
}


export default Reviews;