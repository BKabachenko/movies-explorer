import { useEffect, useState } from 'react';

import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';

import { getMoviesFromFile } from '../../api/movies';
import heart from '../../assets/icons/heart.svg?react';
import starHome from '../../assets/icons/star_home.svg?react';
import Icon from '../../components/Icon/Icon';
import MovieList from '../../components/MovieList/MovieList';
import type { MovieFull } from '../../types';
import { getRandomOne, getRandomTen, getTopTen } from '../../utils/Helpers';

import OneMovie from './components/OneMovie';

const Home = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [moviesTop, setMoviesTop] = useState<MovieFull[]>();
  const [moviesRandom, setMoviesRandom] = useState<MovieFull[]>();
  const [movieOne, setMovieOne] = useState<MovieFull[]>();

  useEffect(() => {
    const controller = new AbortController();
    const signal: AbortSignal = controller.signal;

    const initData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMoviesFromFile(signal);

        const [topTen, randomOne, randomTen] = await Promise.all([
          getTopTen(data, signal),
          getRandomOne(data, signal),
          getRandomTen(data, signal),
        ]);

        setMoviesTop(topTen);
        setMovieOne(randomOne);
        setMoviesRandom(randomTen);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return;
          }
          setError(error.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    initData();

    return () => {
      controller.abort();
    };
  }, []);

  if (isLoading) {
    return (
      <>
        <div className=''>
          <p className='mb-3 flex flex-row items-center gap-2 text-3xl font-semibold md:mb-8'>
            <Icon src={starHome} size='md' className='text-indigo-600' /> TOP 10
          </p>
          <MovieListSkeleton count={10} />
        </div>

        <div className=''>
          <p className='mb-3 flex flex-row items-center gap-2 text-3xl font-semibold md:mb-8'>
            <Icon src={heart} size='md' className='text-indigo-600' /> Recommended for you
          </p>
          <MovieListSkeleton count={10} />
        </div>
      </>
    );
  }
  
  if (error) {
    return null;
  }

  return (
    <>
      {!isLoading && !error && moviesTop && movieOne && moviesRandom && (
        <div className='flex flex-col gap-10 md:gap-18'>
          <div className='h-100 w-full'>
            <OneMovie movie={movieOne[0]} />
          </div>
          <div className=''>
            <p className='mb-3 flex flex-row items-center gap-2 text-3xl font-semibold md:mb-8'>
              <Icon src={starHome} size='md' className='text-indigo-600' /> TOP 10
            </p>
            <MovieList list={moviesTop} />
          </div>

          <div className=''>
            <p className='mb-3 flex flex-row items-center gap-2 text-3xl font-semibold md:mb-8'>
              <Icon src={heart} size='md' className='text-indigo-600' /> Recommended for you
            </p>
            <MovieList list={moviesRandom} />
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
