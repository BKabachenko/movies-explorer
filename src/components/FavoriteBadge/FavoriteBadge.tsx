import type { MouseEvent } from 'react';

import heartIcon from '@/assets/icons/heart.svg?react';
import { useFavoritesStore } from '@/store/useFavoritesStore';

import Icon from '../Icon/Icon';

interface FavoriteBadgeProps {
  id: string;
}

const FavoriteBadge = ({ id }: FavoriteBadgeProps) => {
  const addMovie = useFavoritesStore((s) => s.addMovie);

  const onClickHandler = (e: MouseEvent) => {
    e?.preventDefault();
    addMovie(id);
  };

  return (
    <button
      className='absolute top-5 right-5 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-white/50 transition group-hover:bg-white'
      onClick={onClickHandler}
    >
      <Icon src={heartIcon} size='md' className='text-indigo-600' />
    </button>
  );
};

export default FavoriteBadge;
