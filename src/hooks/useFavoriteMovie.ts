import type { MovieFull, MovieShort } from '@/types';

import { useFavoritesStore } from '@/store/useFavoritesStore';

export const useFavoriteMovie = ( movie: MovieShort | MovieFull ) => {
  const addMovie = useFavoritesStore((s) => s.addMovie);
  const removeMovie = useFavoritesStore((s) => s.removeMovie);

  const isFavorite = useFavoritesStore((s) =>
    s.movieList.some((e) => {
      return e.imdbID === movie.imdbID;
    })
  );

  const toggleFavorite = (e: React.MouseEvent) => {
    e?.preventDefault();
    e?.stopPropagation();

    if (isFavorite) {
      removeMovie(movie.imdbID);
    } else {
      addMovie(movie);
    }
  };

  return { isFavorite, toggleFavorite };
};
