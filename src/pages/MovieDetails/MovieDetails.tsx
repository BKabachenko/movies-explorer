import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { getMovieById } from '../../api/movies';
import calendarIcon from '../../assets/icons/calendar-year.svg?react';
import clockIcon from '../../assets/icons/clock.svg?react';
import infoIcon from '../../assets/icons/info.svg?react';
import peopleIcon from '../../assets/icons/people.svg?react';
import starIcon from '../../assets/icons/star.svg?react';
import trophyIcon from '../../assets/icons/trophy.svg?react';
import worldIcon from '../../assets/icons/world.svg?react';
import BackBtn from '../../components/BackBtn/BackBtn';
import Badge from '../../components/Badge/Badge';
import Icon from '../../components/Icon/Icon';
import type { MovieFull } from '../../types';

// import s from './MovieDetails.module.scss';

const MovieDetails = () => {
  const [movie, setMovie] = useState<MovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  const { id } = useParams();
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

  const dummyPosterLink = 'https://dummyimage.com/300x450/787878/ffffff&text=No+Preview';


  const getPosterSrc = () => {
    const posterLink =
      movie!.Poster === 'N/A'
        ? dummyPosterLink
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
          <BackBtn />

          <div className='rounded-xl bg-white px-10 py-5'>
            <div className='mb-10 flex flex-col content-center justify-center gap-6 sm:flex-row md:justify-start'>
              <div className='flex content-center justify-center'>
                <div className='flex h-96 w-fit content-center justify-center rounded-xl border border-gray-100 p-1 shadow-2xl'>
                  <img src={getPosterSrc()} alt={movie.Title} className='rounded-xl' onError={e => e.currentTarget.src = dummyPosterLink}/>
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
                    {movie.Metascore}
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
            
            <div className='flex flex-col justify-around gap-8 md:flex-row'>
              <div className='flex flex-col gap-5 flex-1'>
                <div className='flex flex-col'>
                  <p className='mb-2 flex-1 text-center text-xl font-semibold md:text-left'>Plot</p>
                  {movie.Plot}
                </div>
                <div className='flex flex-col'>
                  <p className='mb-2 flex-1 text-center text-xl font-semibold md:text-left'>Cast</p>
                  <div className='flex flex-col justify-center gap-2 sm:flex-row md:justify-start'>
                    {splitArray(movie.Actors).map((e, i) => (
                      <Badge key={i} variant='author'>
                        <Icon src={peopleIcon} />
                        {e}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className='rounded-xl bg-gray-100 p-8 flex-1 md:max-w-100'>
                <div className='flex items-center gap-2 text-xl font-semibold'>
                  <Icon src={infoIcon} size='md' className='translate-y-0.4 text-indigo-600' />
                  Details
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Director</p>
                  {movie.Director}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Writer</p>
                  {movie.Writer}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Type</p>
                  {movie.Type}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Awards</p>
                  {movie.Awards}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Country</p>
                  {movie.Country}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Language</p>
                  {movie.Language}
                </div>

                <div className='mb-2 flex flex-col gap-1 border-b border-b-gray-300 py-3'>
                  <p className='text-gray-500'>Production</p>
                  {movie.Production}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetails;
