import type { MovieFull, MovieJson, SearchResponse } from '../types';

import { TEXTS } from '@/constants/strings';

const apiKey = import.meta.env.VITE_API_KEY as string;
const apiUrl = import.meta.env.VITE_API_URL as string;

if (!apiKey || !apiUrl) {
  throw new Error(TEXTS.ERRORS.MISSING_ENV);
}

export const searchMovie = async (
  searchTitle: string,
  searchPage: number = 1,
  signal?: AbortSignal
): Promise<SearchResponse> => {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&s=${searchTitle}&page=${searchPage}`, {
      signal,
    });

    if (!response.ok) {
      throw new Error(TEXTS.ERRORS.BAD_RESPONSE);
    }
    const data: SearchResponse = (await response.json()) as SearchResponse;

    if (data.Response === 'False') {
      throw new Error(data.Error || TEXTS.ERRORS.FAILED_FETCH);
    }

    return data;
  } catch (error) {
    console.error(TEXTS.ERRORS.API_ERROR, error);
    throw error;
  }
};

export const getMovieById = async (id: string, signal?: AbortSignal): Promise<MovieFull> => {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&i=${id}&plot=full`, { signal });

    if (!response.ok) {
      throw new Error(TEXTS.ERRORS.BAD_RESPONSE);
    }
    const data: MovieFull = (await response.json()) as MovieFull;

    if (data.Response === 'False') {
      throw new Error(TEXTS.ERRORS.FAILED_FETCH);
    }

    return data;
  } catch (error) {
    console.error(TEXTS.ERRORS.API_ERROR, error);
    throw error;
  }
};

export const getMoviesFromFile = async (signal: AbortSignal): Promise<MovieJson[]> => {
  try {
    const response = await fetch('/data/top1000movies.json', { signal });

    if (!response.ok) {
      throw new Error(TEXTS.ERRORS.BAD_RESPONSE);
    }
    const data: MovieJson[] = (await response.json()) as MovieJson[];

    return data;
  } catch (error) {
    console.error(TEXTS.ERRORS.API_ERROR, error);
    throw error;
  }
};
