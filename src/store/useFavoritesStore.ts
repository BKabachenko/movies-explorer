import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

interface useFavoritesStoreState {
  movieList: string[];
  addMovie: (id: string) => void;
  // isMovie: (id: string) => boolean;
}

export const useFavoritesStore = create<useFavoritesStoreState>()(
  devtools(
    persist(
      (set) => ({
        movieList: [],
        addMovie: (id) => set((state) => ({ movieList: [...state.movieList, id] })),
      }),
      {
        name: 'FavoritesStore',
      }
    )
  )
);
