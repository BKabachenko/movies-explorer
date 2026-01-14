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

  const getPosterName = () => {
    const posterLink =
      movie!.Poster === 'N/A'
        ? 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview'
        : movie!.Poster;
    return posterLink;
  };
  const splitArray = (str: string) => {
    const arr = str.split(',');
    return arr;
  };

  return (
    <>
      {isLoading && <h3>Loading... Please wait.</h3>}
      {error && <h3>Error. {error}</h3>}
      {!isLoading && !error && movie && (
        <div className='w-full bg-gray-200 px-4'>
          <button
            className='my-5 h-auto w-20 cursor-pointer rounded-md bg-sky-500 p-2 shadow-md transition hover:bg-sky-300 hover:text-white'
            type='button'
            onClick={() => navigate(-1)}
          >
            Back
          </button>

          <div className='rounded-xl bg-white p-3'>
            <div className='flex flex-row'>
              <div className='flex h-96 w-fit justify-center rounded-xl border border-gray-100 p-1 shadow-2xl'>
                <img src={getPosterName()} alt={movie.Title} className='rounded-xl' />
              </div>

              <div className='flex flex-col'>
                <p>{splitArray(movie.Genre).map((elem) => elem)}</p>
                <p>{movie.Metascore}</p>
                <h3>{movie.Title}</h3>
                <p>{movie.Year}</p>
                <p>{movie.Runtime}</p>
                <p>{movie.Rated}</p>
              </div>
            </div>
            <p>{splitArray(movie.Director).map((elem) => elem)}</p>
            <p>{splitArray(movie.Writer).map((elem) => elem)}</p>
            <p>{splitArray(movie.Actors).map((elem) => elem)}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
