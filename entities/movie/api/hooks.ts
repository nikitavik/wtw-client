import { useQuery, useQueries } from '@tanstack/react-query'
import { movieApi, type GetMoviesParams, type Movie } from './index'

const MOVIES_QUERY_KEY = 'movies'

export const useMovies = (params: GetMoviesParams = {}) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, params],
    queryFn: () => movieApi.getMovies(params),
  })
}

export const useMovie = (id: number) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, id],
    queryFn: () => movieApi.getMovieById(id),
    enabled: !!id,
  })
}

export const useMoviesCount = () => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, 'count'],
    queryFn: () => movieApi.getMoviesCount(),
  })
}

export const useMoviesPage = (page: number = 1, limit: number = 20) => {
  return useQuery({
    queryKey: [MOVIES_QUERY_KEY, 'page', page, limit],
    queryFn: () => movieApi.getMovies({ page, limit }),
  })
}