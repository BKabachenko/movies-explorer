import { useState } from 'react';
import { Link } from 'react-router';

import type { MovieFull } from '@/types';

import Badge from '@/components/Badge/Badge';
import Skeleton from '@/components/Skeleton/Skeleton';
import { DEFAULT_POSTER } from '@/constants';
import AddToFavoritesBtn from '@/components/AddToFavoritesBtn/AddToFavoritesBtn';

interface MovieOneProps {
  movie: MovieFull;
}

const OneMovie = ({ movie }: MovieOneProps) => {
  const { Title, Poster, imdbRating, imdbID, Plot } = movie;

  const [imgSrc, setImgSrc] = useState<string>(Poster === 'N/A' ? DEFAULT_POSTER : Poster);
  const [isImgLoad, setIsImgLoad] = useState<boolean>(false);

  const imgLoaderStyle = isImgLoad ? 'opacity-100' : 'opacity-0';

  const imgErrorHandler = () => {
    setImgSrc(DEFAULT_POSTER);
  };
  const imgLoadHandler = () => {
    setIsImgLoad(true);
  };

  return (
    <div className='relative h-full w-full overflow-hidden rounded-xl bg-indigo-900 p-5 md:p-12'>
      <Link to={`/movie/${imdbID}`} className='group'>
        <div className='absolute inset-0 bg-linear-to-r from-gray-900 via-gray-900/80 to-transparent transition group-hover:from-gray-800'></div>
        <article className='inset-shadow-xl inset-shadow-xl relative z-10 flex h-full cursor-pointer flex-row gap-2 rounded-xl inset-shadow-indigo-500 md:gap-x-10'>
          <div className='relative flex max-w-60 flex-1 justify-center rounded-xl border border-gray-300'>
            {!isImgLoad && <Skeleton className='absolute inset-0 aspect-2/3 h-full w-full' />}
            <img
              src={imgSrc}
              alt={`${Title} poster`}
              onLoad={imgLoadHandler}
              onError={imgErrorHandler}
              className={`${imgLoaderStyle} aspect-2/3 h-full w-full rounded-xl object-cover object-center transition-all group-hover:shadow-xl group-hover:shadow-indigo-200/50`}
            />
          </div>
          <div className='flex flex-1 flex-col items-start justify-center gap-2'>
            <div className='mb-5 flex flex-col gap-2 sm:flex-row'>
              <Badge variant='genre'>Movie of the Day</Badge>
              <Badge variant='rate'>{imdbRating}</Badge>
            </div>
            <h3
              className='mb-2 line-clamp-3 text-xl font-bold text-ellipsis text-white sm:text-2xl md:text-4xl'
              title={Title}
            >
              {Title}
            </h3>
            <p className='mb-2 line-clamp-3 text-sm text-ellipsis text-white'>{Plot}</p>
            <AddToFavoritesBtn movie={movie}/>
          </div>
        </article>
      </Link>
    </div>
  );
};

export default OneMovie;
