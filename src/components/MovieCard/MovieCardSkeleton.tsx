import Skeleton from '../Skeleton/Skeleton';

const MovieCardSkeleton = () => {
  return (
    <div className='flex h-fit w-full flex-col gap-2'>
      <Skeleton className='aspect-2/3 w-full' />
      <div className='flex flex-col items-start gap-2'>
        <Skeleton className='h-7 w-full' />
        <Skeleton className='h-4 w-1/2' />
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
