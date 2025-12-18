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
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <a href="/" className="text-xl font-bold hover:text-gray-300 transition-colors">
          WTW Client
        </a>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-300 transition-colors">
            Home
          </a>
          {authenticated ? (
            <button
              onClick={handleLogout}
              className="hover:text-gray-300 transition-colors bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          ) : (
            <>
              <a href="/login" className="hover:text-gray-300 transition-colors">
                Login
              </a>
              <a href="/register" className="hover:text-gray-300 transition-colors">
                Register
              </a>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
