import React, { useEffect, useState } from "react";
import SearchInput from "../../components/SearchInput/SearchInput";
import type { MovieShort, SearchResponse } from "../../types";
import { searchMovie } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";

const Home = () => {
  const [movies, setMovies] = useState<MovieShort[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMovies = async (title: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const data: SearchResponse = await searchMovie(title);
        setMovies(data.Search);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies("Matrix");
  }, []);

  if (!isLoading && !error) {
    console.log(movies);
  }

  return (
    <>
      <SearchInput />
      <MovieList list={movies}/>
    </>
  );
};

export default Home;
