'use client';

import Image from 'next/image';
import { useMoviesPage } from '@/entities/movie';

export function MoviesList() {
  const { data: movies, isLoading, isError, error } = useMoviesPage(2, 20);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-gray-600">Loading movies...</div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="text-red-800 font-medium">Error loading movies</div>
        <div className="text-red-600 text-sm mt-1">
          {error instanceof Error ? error.message : 'Unknown error occurred'}
        </div>
      </div>
    );
  }

  if (!movies || movies.data?.length === 0) {
    return <div className="text-center py-12 text-gray-600">No movies found</div>;
  }

  return (
    <div className="space-y-4">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Movies List</h2>
        <p className="text-gray-600">
          Showing {movies.data?.length} movies from {movies.meta.totalPages} pages
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {movies.data?.map((movie) => (
          <div
            key={movie.id}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            {movie.poster_path && (
              <div className="aspect-[2/3] bg-gray-100 overflow-hidden relative">
                <Image
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title ?? 'Movie poster'}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                />
              </div>
            )}
            <div className="p-4">
              <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
                {movie.title ?? 'Untitled'}
              </h3>
              {movie.original_title && movie.original_title !== movie.title && (
                <p className="text-sm text-gray-500 mb-2">{movie.original_title}</p>
              )}
              {movie.release_date && (
                <p className="text-sm text-gray-600 mb-2">
                  {new Date(movie.release_date).getFullYear()}
                </p>
              )}
              {movie.vote_average !== null && (
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Rating:</span>
                  <span className="text-sm text-gray-900">
                    {Number(movie.vote_average).toFixed(1)}/10
                  </span>
                  {movie.vote_count !== null && (
                    <span className="text-xs text-gray-500">({movie.vote_count} votes)</span>
                  )}
                </div>
              )}
              {movie.overview && (
                <p className="text-sm text-gray-600 mt-2 line-clamp-3">{movie.overview}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
