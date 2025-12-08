import s from "./MovieCard.module.scss";
import type { MovieShort } from "../../types";

type MovieCardType = {
  movie: MovieShort;
};

const MovieCard = ({ movie }: MovieCardType) => {
  if (movie.Poster === "N/A") {
    movie = {
      ...movie,
      Poster: "https://dummyimage.com/300x450/787878/ffffff&text=No+Preview",
    };
  }

  return (
    <div className={s.movieCard}>
      <img src={movie.Poster} alt={movie.Title + " poster image"} />
      <p className={s.title}>{movie.Title}</p>
      <p className={s.type}>{movie.Type}</p>
      <p className={s.year}>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
