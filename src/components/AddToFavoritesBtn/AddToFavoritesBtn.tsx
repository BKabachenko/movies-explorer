import type { MovieFull, MovieShort } from '@/types';

import { useFavoriteMovie } from '@/hooks/useFavoriteMovie';

import Button from '../Button/Button';

interface AddToFavoritesBtnProps {
  movie: MovieShort | MovieFull;
  className?: string;
}

const AddToFavoritesBtn = ({ movie, className }: AddToFavoritesBtnProps) => {
  const { isFavorite, toggleFavorite } = useFavoriteMovie(movie);
  return (
    <Button
      variant={isFavorite ? 'removeFromFavorite' : 'addToFavorite'}
      type='button'
      onClick={toggleFavorite}
      className={className}
    >
      {isFavorite ? 'Remove from favorite' : 'Add to favorite'}
    </Button>
  );
};

export default AddToFavoritesBtn;
