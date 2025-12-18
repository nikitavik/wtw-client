import { useMutation } from '@tanstack/react-query'
import { authApi, LoginRequest, RegisterRequest } from './index'
import { setAuthToken, removeAuthToken, getAuthToken } from '@/shared/lib'

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.login(credentials),
    onSuccess: (data) => {
      // Store JWT token
      setAuthToken(data.token)
      // You might want to update global auth state here
    },
  })
}

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData: RegisterRequest) => authApi.register(userData),
    onSuccess: (data) => {
      // Store JWT token
      setAuthToken(data.token)
      // You might want to update global auth state here
    },
  })
}

export const useLogout = () => {
  return () => {
    removeAuthToken()
    // Clear any global auth state here
  }
}

export const getStoredToken = (): string | null => {
  return getAuthToken()
}
