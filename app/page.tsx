'use client'

import { isAuthenticated } from '@/shared/lib'

export default function Home() {
  const authenticated = isAuthenticated()

  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">
          Welcome to WTW Client
        </h1>
        <p className="text-lg mb-6 text-gray-700">
          This is the home page of your web application.
        </p>

        {authenticated ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-green-800 mb-2">
              ✅ You are logged in!
            </h2>
            <p className="text-green-700">
              Welcome back! You can now access authenticated features.
            </p>
          </div>
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h2 className="text-xl font-semibold text-blue-800 mb-2">
              Get Started
            </h2>
            <p className="text-blue-700 mb-4">
              Please login or register to access all features.
            </p>
            <div className="flex space-x-4">
              <a
                href="/login"
                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-md transition-colors"
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
