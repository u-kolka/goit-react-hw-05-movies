import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";

import { posterParam } from '../config'
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";


const Cast = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  console.log(location.state.id)
  const MovieId = location.state.id;

  useEffect(() => {
    const controller = new AbortController();
    try {
      (async function fetchMovie() {
        const movie = await TheMoviedb.fetchMovieCredits(MovieId);
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

    
  const { postersUrl, altProfileUrl, postersSize } = posterParam;
  return (
    <section>
      <ul>
        {movie && movie.cast.map(({ id, name, profile_path, character }) => {
        const src = (profile_path === null) ? altProfileUrl : (`${postersUrl+postersSize+profile_path}`);
        return (
            <li key={id}>
              <img src={src} alt={name} width='100'/>
            <h3>{name}</h3>
            {character && <p>Character: {character}</p>}
            </li>)
      })} 
      </ul>
    </section>
  );
}


export default Cast;