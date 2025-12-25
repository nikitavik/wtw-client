import { getAuthHeaders } from '@/shared/lib';
import type { ApiError, GetMoviesParams, Movie, PaginatedMoviesResponse } from './types';

const API_BASE_URL = '';

class MovieApi {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
    const url = `${API_BASE_URL}${endpoint}`;

    const authHeaders = getAuthHeaders();
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...(authHeaders.Authorization && { Authorization: authHeaders.Authorization }),
      ...(options.headers as Record<string, string>),
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      const error: ApiError = {
        message: `HTTP ${response.status}: ${response.statusText}`,
        status: response.status,
      };
      throw error;
    }

    return response.json();
  }

  async getMovies(params: GetMoviesParams = {}): Promise<PaginatedMoviesResponse> {
    const { page = 1, limit = 20, title } = params;
    const searchParams = new URLSearchParams({
      page: page.toString(),
      limit: limit.toString(),
    });

    if (title) {
      searchParams.append('title', title);
    }

    return this.request<PaginatedMoviesResponse>(`/api/movies?${searchParams.toString()}`);
  }

  async getMovieById(id: number): Promise<Movie> {
    return this.request<Movie>(`/api/movies/${id}`);
  }

  async getMoviesCount(): Promise<{ count: number }> {
    return this.request<{ count: number }>('/api/movies/count');
  }
}

export const movieApi = new MovieApi();
