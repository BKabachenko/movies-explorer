import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieById } from '@/api/movies';
import calendarIcon from '@/assets/icons/calendar-year.svg?react';
import clockIcon from '@/assets/icons/clock.svg?react';
import starIcon from '@/assets/icons/star.svg?react';
import BackBtn from '@/components/BackBtn/BackBtn';
import Badge from '@/components/Badge/Badge';
import Icon from '@/components/Icon/Icon';
import DetailsBlock from '@/pages/MovieDetails/components/DetailsBlock';
import type { MovieFull } from '@/types';
import { splitArray } from '@/utils/Helpers';

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const { id } = useParams();
  useEffect(() => {
    const fetchMovie = async () => {
      const controller = new AbortController();
      const signal = controller.signal;
      try {
        setIsLoading(true);
        setError(null);

        if (id) {
          const data = await getMovieById(id, signal);
          setMovie(data);
        } else {
          throw new Error('ID undefined');
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortSignal') {
            return;
          }
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

  const dummyPosterLink = 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview';

  const getPosterSrc = () => {
    const posterLink = movie!.Poster === 'N/A' ? dummyPosterLink : movie!.Poster;
    return posterLink;
  };

  return (
    <>
      {isLoading && <h3>Loading... Please wait.</h3>}
      {error && <h3>Error. {error}</h3>}
      {!isLoading && !error && movie && (
        <div className='w-full bg-gray-200 px-4'>
          <BackBtn />

          <div className='rounded-xl bg-white px-10 py-5'>
            <div className='mb-10 flex flex-col content-center justify-center gap-6 sm:flex-row md:justify-start'>
              <div className='flex content-center justify-center'>
                <div className='flex h-96 w-fit content-center justify-center rounded-xl border border-gray-100 p-1 shadow-2xl'>
                  <img
                    src={getPosterSrc()}
                    alt={movie.Title}
                    className='rounded-xl'
                    onError={(e) => (e.currentTarget.src = dummyPosterLink)}
                  />
                </div>
              </div>

              <div className='flex flex-1 flex-col justify-center'>
                <div className='flex flex-row flex-wrap justify-center gap-3 sm:justify-start'>
                  {splitArray(movie.Genre).map((e, i) => (
                    <Badge key={i} variant='genre'>
                      {e}
                    </Badge>
                  ))}
                  <Badge variant='rate'>
                    <Icon src={starIcon} />
                    {movie.imdbRating}
                  </Badge>
                </div>
                <h3 className='py-4 text-center text-4xl font-semibold sm:text-5xl md:text-start md:text-7xl'>
                  {movie.Title}
                </h3>
                <div className='flex flex-row flex-wrap justify-center gap-3 sm:justify-start'>
                  <Badge variant='secondary'>
                    <Icon src={calendarIcon} />
                    {movie.Year}
                  </Badge>
                  <Badge variant='secondary'>
                    <Icon src={clockIcon} />
                    {movie.Runtime}
                  </Badge>
                  <Badge variant='secondary'>{movie.Rated}</Badge>
                </div>
              </div>
            </div>
            <DetailsBlock movie={movie} />
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
