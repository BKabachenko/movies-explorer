import { useEffect, useState } from 'react';

import type { MovieFull } from '@/types';

import { getMovieById } from '@/api/movies';
import { TEXTS } from '@/constants/strings';

export const useMovies = (id: string | undefined) => {
  const [movie, setMovie] = useState<MovieFull>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (id) {
          const data = await getMovieById(id, signal);
          setMovie(data);
        } else {
          throw new Error(TEXTS.ERRORS.ID_UNDEFINED);
        }
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return;
          }
          setError(error.message);
        } else {
          setError(TEXTS.ERRORS.UNEXPECTED);
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    fetchMovie();
    return () => {
      controller.abort();
    };
  }, [id]);

  return { movie, isLoading, error };
};
