import { getMovieById } from "../api/movies";
import type { MovieJson } from "../types";

export const fetchMoviesById = async (moviesArr: MovieJson[], signal: AbortSignal) => {
  const request = moviesArr.map((e) => getMovieById(e.id, signal));
  const response = await Promise.all(request);
  return response;
};

export const getTopTen = async (moviesList: MovieJson[], signal: AbortSignal) => {
  const firstTenArr = moviesList?.slice(0, 10);
  const result = await fetchMoviesById(firstTenArr, signal);
  return result;
};

export const getRandomOne = async (moviesList: MovieJson[], signal: AbortSignal) => {
  const randomIndex = Math.floor(Math.random() * moviesList.length);
  const randomOne = moviesList[randomIndex];
  const result = await fetchMoviesById([randomOne], signal);
  return result;
};

export const getRandomTen = async (moviesList: MovieJson[], signal: AbortSignal) => {
  let randomIndex = Math.floor(Math.random() * moviesList.length);
  if (randomIndex >= moviesList.length - 10) randomIndex -= 10;
  const randomTenArr = moviesList?.slice(randomIndex, randomIndex + 10);
  const result = await fetchMoviesById(randomTenArr, signal);
  return result;
};
