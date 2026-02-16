import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import Skeleton from '@/components/Skeleton/Skeleton';
import { useMoviesFromFile } from '@/hooks/useMoviesFromFile';

import heart from '../../assets/icons/heart.svg?react';
import starHome from '../../assets/icons/star_home.svg?react';
import Icon from '../../components/Icon/Icon';
import MovieList from '../../components/MovieList/MovieList';

import OneMovie from './components/OneMovie';

const Home = () => {
  const { moviesTop, movieOne, moviesRandom, isLoading, error } = useMoviesFromFile();

  if (isLoading) {
    return (
      <>
        <Skeleton className='mb-18 h-100 w-full' />
        <div className='mb-20'>
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
    return (
      <p className='pt-10 text-center text-xl'>
        Oops! Something went wrong. Please try refreshing the page or try again later.
        <p>{error}</p>
      </p>
    );
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
