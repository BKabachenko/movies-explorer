import type { SearchResponse } from "../types";

const apiKey = import.meta.env.VITE_API_KEY;
const apiUrl = import.meta.env.VITE_API_URL;

export const searchMovie = async (searchTitle: string): Promise<SearchResponse> => {
  try {
    const response = await fetch(`${apiUrl}?apikey=${apiKey}&s=${searchTitle}`);

    if (!response.ok) {
      throw new Error("Response isn`t OK");
    }
    const data: SearchResponse = await response.json();

    if (data.Response === "False") {
      throw new Error(data.Error || "Failed to fetch movie");
    }

    return data;
  } catch (error) {
    console.error("Api error", error);
    throw error;
  }
};
