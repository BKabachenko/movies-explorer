import heart from '@/assets/icons/heart.svg?react';
import starHome from '@/assets/icons/star_home.svg?react';
import Icon from '@/components/Icon/Icon';
import MovieListSkeleton from '@/components/MovieList/MovieListSkeleton';
import Skeleton from '@/components/Skeleton/Skeleton';

const HomeSkeleton = () => {
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
};

export default HomeSkeleton;
