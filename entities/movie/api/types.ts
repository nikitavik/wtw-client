export interface Movie {
  id: number;
  title: string | null;
  original_title: string | null;
  overview: string | null;
  tagline: string | null;
  release_date: string | null;
  budget: number | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  adult: boolean | null;
  video: boolean | null;
  popularity: number | null;
  vote_average: number | null;
  vote_count: number | null;
  imdb_id: string | null;
  original_language: string | null;
  homepage: string | null;
  poster_path: string | null;
  collection_name: string | null;
  genres: string | null;
  production_companies: string | null;
  production_countries: string | null;
  spoken_languages: string | null;
}

export interface PaginationMeta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface PaginatedMoviesResponse {
  data: Movie[];
  meta: PaginationMeta;
}

export interface GetMoviesParams {
  page?: number;
  limit?: number;
  title?: string;
}

export interface ApiError {
  message: string;
  status?: number;
}
