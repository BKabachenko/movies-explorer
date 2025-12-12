import s from "./MovieCard.module.scss";
import type { MovieShort } from "../../types";

type MovieCardProps = {
  movie: MovieShort;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const posterLink =
    movie.Poster === "N/A"
      ? "https://dummyimage.com/300x450/787878/ffffff&text=No+Preview"
      : movie.Poster;

  return (
    <article className={s.movieCard}>
      <div className={s.imgWrapper}>
        <img src={posterLink} alt={movie.Title + " poster image"} loading="lazy" />
      </div>
      <div className={s.content}>
        <h3 className={s.title}>{movie.Title}</h3>
        <div className={s.meta}>
          <p className={s.type}>{movie.Type}</p>
          <p className={s.year}>{movie.Year}</p>
        </div>
      </div>
    </article>
  );
};

export default MovieCard;
