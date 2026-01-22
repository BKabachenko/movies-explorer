import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router';

import { searchMovie } from '../../api/movies';
import MovieList from '../../components/MovieList/MovieList';
import type { MovieShort, SearchResponse } from '../../types';

const Home = () => {
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const [searchParams] = useSearchParams();
  const searchText = searchParams.get('search') || '';

  useEffect(() => {
    const fetchMovies = async (title: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const data: SearchResponse = await searchMovie(title);
        const filteredData = data.Search.filter(
          (movie, index, self) => index === self.findIndex((m) => m.imdbID === movie.imdbID)
        );
        setMovies(filteredData);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError('Unknown error');
        }
      } finally {
        setIsLoading(false);
      }
    };

    if (searchText) {
      fetchMovies(searchText);
    } else {
      setMovies([]);
      setError(null);
    }
  }, [searchText]);

  return (
    <>
      {isLoading && <h3>Please wait... Your list are loading.</h3>}
      {searchText === null && <h3>Please type your request title.</h3>}
      {error && searchText && <h3>Error. {error}</h3>}
      {!isLoading && !error && <MovieList list={movies} />}
    </>
  );
};

export default Home;
