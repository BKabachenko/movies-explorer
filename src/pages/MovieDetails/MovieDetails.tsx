import { useParams } from 'react-router';
import { TEXTS } from '@/constants/strings';

import calendarIcon from '@/assets/icons/calendar-year.svg?react';
import clockIcon from '@/assets/icons/clock.svg?react';
import starIcon from '@/assets/icons/star.svg?react';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn/AddToFavoritesBtn';
import BackBtn from '@/components/BackBtn/BackBtn';
import Badge from '@/components/Badge/Badge';
import Icon from '@/components/Icon/Icon';
import { DEFAULT_POSTER } from '@/constants';
import { useMovies } from '@/hooks/useMovies';
import DetailsBlock from '@/pages/MovieDetails/components/DetailsBlock';
import { splitStringToArray } from '@/utils/Helpers';

import MovieDetailsSkeleton from './MovieDetailsSkeleton';

const MovieDetails = () => {
  const { id } = useParams();

  const { movie, isLoading, error } = useMovies(id);

  const getPosterSrc = () => {
    if (!movie) return DEFAULT_POSTER;
    const posterLink = movie.Poster === 'N/A' ? DEFAULT_POSTER : movie.Poster;
    return posterLink;
  };

  return (
    <>
      {isLoading && <MovieDetailsSkeleton />}
      {error && <h3>{TEXTS.MOVIE_DETAILS.ERROR}{error}</h3>}
      {!isLoading && !error && movie && (
        <div className='w-full bg-gray-200 px-4'>
          <BackBtn />

          <div className='rounded-xl bg-white px-10 py-5'>
            <div className='mb-10 flex flex-col content-center justify-center gap-6 sm:flex-row md:justify-start'>
              <div className='flex flex-col content-center items-center justify-center gap-4'>
                <div className='flex h-96 w-fit content-center justify-center rounded-xl border border-gray-100 p-1 shadow-2xl'>
                  <img
                    src={getPosterSrc()}
                    alt={movie.Title}
                    className='rounded-xl'
                    onError={(e) => (e.currentTarget.src = DEFAULT_POSTER)}
                  />
                </div>
                <AddToFavoritesBtn movie={movie} className='w-full' />
              </div>

              <div className='flex flex-1 flex-col justify-center'>
                <div className='flex flex-row flex-wrap justify-center gap-3 sm:justify-start'>
                  {splitStringToArray(movie.Genre).map((e, i) => (
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
