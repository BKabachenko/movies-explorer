export interface SearchRequest {
  s: string;
}
export interface MovieRequest {
  i: string;
}
export interface SearchResponse {
  Response: "True" | "False";
  Search: MovieShort[];
  totalResults: number;
  Error?: string;
}
export interface MovieShort {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Response?: string;
  Error?: string;
}
export interface MovieFull {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: [
    {
      Source: string;
      Value: string;
    }
  ];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  imdbID: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: "True" | "False";
}

export interface MovieJson {
  id: string;
  title: string;
  year: string;
  rating: string;
  votes: string;
  genres: string;
}
