import s from "./MovieList.module.scss";
import type { MovieShort } from "../../types";
import MovieCard from "../MovieCard/MovieCard";

type MovieListType = {
  list: MovieShort[];
};

const MovieList = ({ list }: MovieListType) => {
  if (list.length === 0) return;
  return (
    <div className={s.list}>
      {list.map((item) => (
        <MovieCard key={item.imdbID} movie={item} />
      ))}
    </div>
  );
};

export default MovieList;
