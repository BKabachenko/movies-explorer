import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';

import { getMovieById } from '../../api/movies';
import Badge from '../../components/Badge/Badge';
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

          <div className='rounded-xl bg-white px-10 py-5'>
            <div className='mb-10 flex flex-row gap-x-6'>
              <div className='flex h-96 w-fit justify-center rounded-xl border border-gray-100 p-1 shadow-2xl'>
                <img src={getPosterName()} alt={movie.Title} className='rounded-xl' />
              </div>

              <div className='flex flex-col justify-center'>
                <div className='flex flex-row gap-3'>
                  {splitArray(movie.Genre).map((e, i) => (
                    <Badge key={i} variant='genre'>
                      {e}
                    </Badge>
                  ))}
                  <Badge variant='rate' icon=''>
                    {movie.Metascore}
                  </Badge>
                </div>
                <h3>{movie.Title}</h3>
                <div className='flex flex-row gap-3'>
                  <Badge variant='secondary' icon=''>
                    {movie.Year}
                  </Badge>
                  <Badge variant='secondary' icon=''>
                    {movie.Runtime}
                  </Badge>
                  <Badge variant='secondary' icon=''>
                    {movie.Rated}
                  </Badge>
                </div>
              </div>
            </div>
            <div>
              {splitArray(movie.Director).map((e, i) => (
                <Badge key={i} variant='author'>
                  {e}
                </Badge>
              ))}
            </div>
            <div>
              {splitArray(movie.Writer).map((e, i) => (
                <Badge key={i} variant='author'>
                  {e}
                </Badge>
              ))}
            </div>
            <div>
              {splitArray(movie.Actors).map((e, i) => (
                <Badge key={i} variant='author'>
                  {e}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
