'use client'

import { isAuthenticated } from '@/shared/lib'
import { useLogout } from '@/entities/auth'

export function Navigation() {
  const logout = useLogout()
  const authenticated = isAuthenticated()

  const handleLogout = () => {
    logout()
    window.location.href = '/'
  }

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-xl font-semibold text-gray-900 hover:text-gray-700">
          WTW Client
        </a>
        <div className="flex items-center space-x-6">
          <a href="/" className="text-gray-700 hover:text-gray-900 font-medium">
            Home
          </a>
          {authenticated ? (
            <button
              onClick={handleLogout}
              className="text-gray-700 hover:text-gray-900 font-medium bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="text-gray-700 hover:text-gray-900 font-medium">
                Login
              </a>
              <a href="/register" className="bg-gray-900 hover:bg-gray-800 text-white font-medium px-4 py-2 rounded">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
