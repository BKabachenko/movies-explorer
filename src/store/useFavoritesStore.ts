import type { MovieShort } from '@/types';
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface useFavoritesStoreState {
  movieList: MovieShort[];
  addMovie: (movie: MovieShort) => void;
  removeMovie: (id: string) => void;
  checkIsFavorite: (id: string) => boolean;
}

export const useFavoritesStore = create<useFavoritesStoreState>()(
  devtools(
    persist(
      (set, get) => ({
        movieList: [],

        addMovie: (movie) => {
          const currentList = get().movieList;

          if (!currentList.some(e => {return e.imdbID === movie.imdbID})) {
            set((state) => ({ movieList: [...state.movieList, movie] }));
          }
        },

        removeMovie: (id) =>
          set((state) => ({ movieList: state.movieList.filter((e) => e.imdbID !== id) })),

        checkIsFavorite: (id) => {
          return (get().movieList.some(e => {return e.imdbID === id}));
        },
        
      }),
      {
        name: 'FavoritesStore',
      }
    )
  )
);
