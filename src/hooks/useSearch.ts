import { useEffect, useState } from 'react';

import type { MovieShort, SearchResponse } from '@/types';

import { searchMovie } from '@/api/movies';

export const useSearch = (searchText: string | undefined, searchPage: number | undefined = 1) => {
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const fetchMovies = async (title: string, page?: number) => {
      try {
        setIsLoading(true);
        setError(null);

        const data: SearchResponse = await searchMovie(title, page, signal);
        const filteredData = data.Search.filter(
          (movie, index, self) => index === self.findIndex((m) => m.imdbID === movie.imdbID)
        );
        setMovies(filteredData);
      } catch (error) {
        if (error instanceof Error) {
          if (error.name === 'AbortError') {
            return;
          }
          setError(error.message);
        } else {
          setError('An unexpected error occurred');
        }
      } finally {
        if (!signal.aborted) {
          setIsLoading(false);
        }
      }
    };

    if (searchText && searchText.trim().length > 0) {
      fetchMovies(searchText, searchPage);
    } else {
      setMovies([]);
      setError(null);
    }

    return () => {
      controller.abort();
    };
  }, [searchText, searchPage]);

  return { movies, isLoading, error };
};
