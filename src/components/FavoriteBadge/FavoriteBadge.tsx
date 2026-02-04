import { type MouseEvent } from 'react';

import checkIcon from '@/assets/icons/check.svg?react';
import plusIcon from '@/assets/icons/plus.svg?react';
import { useFavoritesStore } from '@/store/useFavoritesStore';

import Icon from '../Icon/Icon';
import type { MovieShort } from '@/types';

interface FavoriteBadgeProps {
  movie: MovieShort;
}

const FavoriteBadge = ({ movie }: FavoriteBadgeProps) => {
  const addMovie = useFavoritesStore((s) => s.addMovie);
  const removeMovie = useFavoritesStore((s) => s.removeMovie);
  const isFavorite = useFavoritesStore((s) => s.movieList.some(e => {return e.imdbID === movie.imdbID}));

  const onClickHandler = (e: MouseEvent) => {
    e?.preventDefault();

    if (isFavorite) {
      removeMovie(movie.imdbID);
    } else {
      console.log(movie)
      addMovie(movie);
    }
  };

  if (!movie) {
    return;
  }

  return (
    <button
      className='absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/50 transition group-hover:bg-white'
      onClick={onClickHandler}
    >
      {isFavorite ? (
        <Icon src={checkIcon} size='md' className='text-indigo-600' />
      ) : (
        <Icon src={plusIcon} size='md' className='text-indigo-600' />
      )}
    </button>
  );
};

export default FavoriteBadge;
