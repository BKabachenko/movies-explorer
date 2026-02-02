import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface useFavoritesStoreProps {
  movies: number;
}

export const useFavoritesStore = create<useFavoritesStoreProps>()(
  persist(
    () => ({
      movies: 0,
    }),
    {
      name: 'FavoritesStore',
    }
  )
);
