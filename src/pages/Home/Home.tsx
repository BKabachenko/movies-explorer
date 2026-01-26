import { useEffect, useState } from 'react';

import { getMovieById, getMoviesFromFile } from '../../api/movies';
import MovieList from '../../components/MovieList/MovieList';
import type { MovieFull, MovieJson } from '../../types';

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
          getTopTen(data),
          getRandomOne(data),
          getRandomTen(data),
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

  const fetchMoviesById = async (moviesArr: MovieJson[]) => {
    const request = moviesArr.map((e) => getMovieById(e.id));
    const response = await Promise.all(request);
    return response;
  };

  const getTopTen = async (moviesList: MovieJson[]) => {
    const firstTenArr = moviesList?.slice(0, 10);
    const result = await fetchMoviesById(firstTenArr);
    return result;
  };

  const getRandomOne = async (moviesList: MovieJson[]) => {
    const randomIndex = Math.floor(Math.random() * moviesList.length);
    const randomOne = moviesList[randomIndex];
    const result = await fetchMoviesById([randomOne]);
    return result;
  };

  const getRandomTen = async (moviesList: MovieJson[]) => {
    let randomIndex = Math.floor(Math.random() * moviesList.length);
    if (randomIndex >= moviesList.length - 10) randomIndex -= 10;
    const randomTenArr = moviesList?.slice(randomIndex, randomIndex + 10);
    const result = await fetchMoviesById(randomTenArr);
    return result;
  };

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
