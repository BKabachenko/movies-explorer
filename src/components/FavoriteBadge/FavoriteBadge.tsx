import type { MovieShort } from '@/types';

import checkIcon from '@/assets/icons/check.svg?react';
import plusIcon from '@/assets/icons/plus.svg?react';
import { useFavoriteMovie } from '@/hooks/useFavoriteMovie';

import Icon from '../Icon/Icon';

interface FavoriteBadgeProps {
  movie: MovieShort;
  className?: string;
}

const FavoriteBadge = ({ movie, className }: FavoriteBadgeProps) => {
  const { isFavorite, toggleFavorite } = useFavoriteMovie(movie);

  if (!movie) {
    return null;
  }

  return (
    <button
      className={`${className} absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/50 transition group-hover:bg-white`}
      onClick={toggleFavorite}
      aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
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
