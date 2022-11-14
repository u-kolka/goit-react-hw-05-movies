import { useState, useEffect } from "react";
import { useLocation  } from "react-router-dom";
import TheMoviedb from "components/TheMoviedb.API/TheMoviedb.API";
import { ReviewsList } from "components/Reviews/ReviewsList";
import { Section } from "components/Layout/Layout.styled";
import { Text } from "components/Reviews/Reviews.styled";

const Reviews = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
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
  
  if (!movie) return null;
  console.log(movie)
  return (
    movie.results.length === 0 && <Text>We don't have any reviews for this movie :( </Text> ||
    movie.results.length > 0 &&
    <Section>
      <ReviewsList movie={movie.results}></ReviewsList>
    </Section>
  );
}

export default Reviews;