'use client';

import { isAuthenticated } from '@/shared/lib';
import { MoviesList } from '@/widgets/movies-list';

export default function Home() {
  const authenticated = isAuthenticated();

  return (
    <main className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900">Welcome to WTW Client</h1>
          <p className="text-lg text-gray-600">Your modern web application platform</p>
        </div>

        {authenticated ? (
          <MoviesList />
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">Get Started</h2>
            <p className="text-gray-600 mb-6">Please login or register to access all features.</p>
            <div className="flex space-x-4">
              <a
                href="/login"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded text-center"
              >
                Login
              </a>
              <a
                href="/register"
                className="flex-1 bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded text-center"
              >
                Register
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
