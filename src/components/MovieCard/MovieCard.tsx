import { useState } from 'react';
import { Link } from 'react-router';

import type { MovieShort } from '@/types';

import { DEFAULT_POSTER } from '@/constants';

import FavoriteBadge from '../FavoriteBadge/FavoriteBadge';
import Skeleton from '../Skeleton/Skeleton';

type MovieCardProps = {
  movie: MovieShort;
};

const MovieCard = ({ movie }: MovieCardProps) => {
  const { Title, Poster, Year, Type, imdbID } = movie;

  const [imgSrc, setImgSrc] = useState<string>(Poster === 'N/A' ? DEFAULT_POSTER : Poster);
  const [isImgLoad, setIsImgLoad] = useState<boolean>(false);

  const imgErrorHandler = () => {
    setImgSrc(DEFAULT_POSTER);
  };
  const imgLoadHandler = () => {
    setIsImgLoad(true);
  };

  const imgLoaderStyle = isImgLoad ? 'opacity-100' : 'opacity-0';

  return (
    <Link to={`/movie/${imdbID}`}>
      <article className='group inset-shadow-xl relative flex h-full cursor-pointer flex-col gap-2 rounded-xl inset-shadow-indigo-500 transition-all hover:scale-103'>
        <FavoriteBadge movie={movie} className='z-10' />
        <div className='relative flex w-full justify-center rounded-xl border border-gray-300'>
          {!isImgLoad && <Skeleton className='absolute inset-0 aspect-2/3 h-full w-full' />}
          <img
            src={imgSrc}
            alt={`${Title} poster`}
            loading='lazy'
            onLoad={imgLoadHandler}
            onError={imgErrorHandler}
            className={`${imgLoaderStyle} aspect-2/3 h-full w-full rounded-xl object-cover object-center transition-opacity duration-500 group-hover:shadow-xl group-hover:shadow-indigo-200/50`}
          />
        </div>
        <div className='flex flex-col items-start'>
          <h3
            className='mb-2 line-clamp-1 text-lg font-bold text-ellipsis group-hover:text-indigo-600'
            title={Title}
          >
            {Title}
          </h3>
          <div className='flex flex-row items-center gap-2 text-sm'>
            <p className='text-gray-600'>{Year}</p>
            <span className='h-1 w-1 translate-y-px rounded-xl bg-gray-700'></span>
            <p className='text-gray-600'>{Type}</p>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default MovieCard;
