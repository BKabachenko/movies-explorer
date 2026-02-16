import { useEffect, useState } from 'react';

import type { MovieFull } from '@/types';

import { getMoviesFromFile } from '@/api/movies';
import { getRandomOne, getRandomTen, getTopTen } from '@/utils/Helpers';

export const useMoviesFromFile = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [moviesTop, setMoviesTop] = useState<MovieFull[]>();
  const [moviesRandom, setMoviesRandom] = useState<MovieFull[]>();
  const [movieOne, setMovieOne] = useState<MovieFull[]>();

  useEffect(() => {
    const controller = new AbortController();
    const signal: AbortSignal = controller.signal;

    const initData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const data = await getMoviesFromFile(signal);

        const [topTen, randomOne, randomTen] = await Promise.all([
          getTopTen(data, signal),
          getRandomOne(data, signal),
          getRandomTen(data, signal),
        ]);

        setMoviesTop(topTen);
        setMovieOne(randomOne);
        setMoviesRandom(randomTen);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return;
          }
          setError(error.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    initData();

    return () => {
      controller.abort();
    };
  }, []);

  return { moviesTop, movieOne, moviesRandom, isLoading, error };
};
