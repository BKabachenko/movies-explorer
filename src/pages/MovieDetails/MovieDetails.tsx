import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getMovieById } from "../../api/movies";
import type { MovieFull } from "../../types";
import s from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (id) {
          const data = await getMovieById(id);
          setMovie(data);
        } else {
          throw new Error("ID undefined");
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          throw new Error("New error");
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  return (
    <>
      {isLoading && <h3>Loading... Please wait.</h3>}
      {error && <h3>Error. {error}</h3>}
      {!isLoading && !error && movie && (
        <div className={s.movieBlock}>
          <h3>{movie.Title}</h3>
          <p>{movie.Year}</p>
          <p>{movie.Rated}</p>
          <p>{movie.Released}</p>
          <p>{movie.Runtime}</p>
          <p>{movie.Genre}</p>
          <p>{movie.Director}</p>
          <p>{movie.Writer}</p>
          <p>{movie.Actors}</p>
          <button
            className="w-20 h-8 shadow-md cursor-pointer p-2 rounded-md bg-sky-500 hover:bg-sky-300 hover:text-white transition"
            type="button"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
