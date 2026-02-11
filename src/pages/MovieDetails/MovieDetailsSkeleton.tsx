import BackBtn from '@/components/BackBtn/BackBtn';
import Skeleton from '@/components/Skeleton/Skeleton';

const MovieDetailsSkeleton = () => {
  return (
    <div className='w-full bg-gray-200 px-4'>
      <BackBtn />

      <div className='rounded-xl bg-white px-10 py-5'>
        <div className='mb-10 flex flex-col content-center justify-center gap-6 md:justify-start'>
          <div className='flex flex-col content-center justify-center gap-10 sm:flex-row'>
            <div className='flex content-center justify-center'>
              <Skeleton className='h-96 w-60' />
            </div>

            <div className='flex flex-1 flex-col justify-center gap-5'>
              <div className='flex flex-row flex-wrap justify-center gap-3 sm:justify-start'>
                <Skeleton className='h-9 w-24' />
                <Skeleton className='h-9 w-24' />
                <Skeleton className='h-9 w-24' />
                <Skeleton className='h-9 w-24' />
              </div>
              <Skeleton className='h-10 w-full' />

              <div className='flex flex-row flex-wrap justify-center gap-3 sm:justify-start'>
                <Skeleton className='h-9 w-25' />
                <Skeleton className='h-9 w-25' />
                <Skeleton className='h-9 w-25' />
              </div>
            </div>
          </div>
          <Skeleton className='h-200 w-full' />
        </div>
      </div>
    </div>
  );
};

export default MovieDetailsSkeleton;
