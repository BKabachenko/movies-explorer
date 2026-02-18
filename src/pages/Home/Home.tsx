import heart from '@/assets/icons/heart.svg?react';
import starHome from '@/assets/icons/star_home.svg?react';
import { useMoviesFromFile } from '@/hooks/useMoviesFromFile';

import HomeSkeleton from './HomeSkeleton';
import MovieLine from './components/MovieLine';
import OneMovie from './components/OneMovie';

const Home = () => {
  const { moviesTop, movieOne, moviesRandom, isLoading, error } = useMoviesFromFile();

  if (isLoading) {
    return <HomeSkeleton />;
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
          <MovieLine label='TOP 10' movies={moviesTop} icon={starHome} />
          <MovieLine label='Recommended for you' movies={moviesRandom} icon={heart} />
        </div>
      )}
    </>
  );
};

export default Home;
