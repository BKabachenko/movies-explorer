import s from "./MovieList.module.scss";
import type { MovieShort } from "../../types";
import MovieCard from "../MovieCard/MovieCard";

type MovieListProps = {
  list: MovieShort[];
};

const MovieList = ({ list }: MovieListProps) => {
  if (list.length === 0 || !list ) return (
    <div className={s.emptyList}>
      <h2>No Films</h2>
      <p>Please change search request.</p>
    </div>
  );

  return (
    <div className={s.list}>
      {list.map((item) => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
