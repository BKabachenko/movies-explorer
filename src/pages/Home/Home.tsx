import { useEffect, useState } from 'react';

import { getMoviesFromFile } from '../../api/movies';
import MovieList from '../../components/MovieList/MovieList';
import type { MovieFull } from '../../types';
import { getTopTen, getRandomOne, getRandomTen } from '../../utils/Helpers';

const Home = () => {
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

  return (
    <>
      {!isLoading && moviesTop && movieOne && moviesRandom && (
        <div className=''>
          <p>TOP 1</p>
          <MovieList list={movieOne} />
          <p>TOP 10</p>
          <MovieList list={moviesTop} />
          <p>Random 10</p>
          <MovieList list={moviesRandom} />
        </div>
      )}
    </>
  );
};

export default Home;
