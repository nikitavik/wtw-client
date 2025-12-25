'use client'

import { isAuthenticated } from '@/shared/lib'
import { debugTokenStorage } from '@/entities/auth'
import { MoviesList } from '@/widgets/movies-list'

export default function Home() {
  const authenticated = isAuthenticated()

  return (
    <main className="bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold mb-4 text-gray-900">
            Welcome to WTW Client
          </h1>
          <p className="text-lg text-gray-600">
            Your modern web application platform
          </p>
        </div>

        {authenticated ? (
          <>
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm mb-8">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">
                  You are logged in!
                </h2>
              </div>
              <p className="text-gray-700 mb-6">
                Welcome back! You can now access authenticated features.
              </p>
              <button
                onClick={debugTokenStorage}
                className="bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 px-4 rounded"
              >
                Debug Token
              </button>
            </div>
            
            <MoviesList/>
          </>
        ) : (
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">
              Get Started
            </h2>
            <p className="text-gray-600 mb-6">
              Please login or register to access all features.
            </p>
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
  )
}
