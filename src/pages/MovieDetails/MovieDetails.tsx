import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getMovieById } from '../../api/movies';
import type { MovieFull } from '../../types';

// import s from './MovieDetails.module.scss';

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
          throw new Error('ID undefined');
        }
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          throw new Error('New error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  const posterLink =
    movie!.Poster === 'N/A'
      ? 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview'
      : movie!.Poster;

  return (
    <>
      {isLoading && <h3>Loading... Please wait.</h3>}
      {error && <h3>Error. {error}</h3>}
      {!isLoading && !error && movie && (
        <div className='w-full'>
          <div className='p-2'>
            <div className='h-96 w-full rounded-xl border-4 border-red-800 p-4'>
              <img src={posterLink} alt={movie.Title} className='h-full rounded-xl' />
            </div>
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
              className='h-8 w-20 cursor-pointer rounded-md bg-sky-500 p-2 shadow-md transition hover:bg-sky-300 hover:text-white'
              type='button'
              onClick={() => navigate(-1)}
            >
              Back
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
