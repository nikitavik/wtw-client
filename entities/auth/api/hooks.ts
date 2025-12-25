import { useMutation } from '@tanstack/react-query';
import { getAuthToken, isAuthenticated, removeAuthToken, setAuthToken } from '@/shared/lib';
import { authApi, type LoginRequest, type RegisterRequest } from './index';

export const useLogin = () => {
  return useMutation({
    mutationFn: (credentials: LoginRequest) => authApi.login(credentials),
    onSuccess: (data) => {
      console.log('Login successful, received data:', data);
      console.log('Access token:', data.access_token);
      // Store JWT token
      setAuthToken(data.access_token);
      console.log('Token stored in localStorage');
      // You might want to update global auth state here
    },
  });
};

export const useRegister = () => {
  return useMutation({
    mutationFn: (userData: RegisterRequest) => authApi.register(userData),
    onSuccess: (data) => {
      console.log('Register successful, received data:', data);
      console.log('Access token:', data.access_token);
      // Store JWT token
      setAuthToken(data.access_token);
      console.log('Token stored in localStorage');
      // You might want to update global auth state here
    },
  });
};

export const useLogout = () => {
  return () => {
    removeAuthToken();
    // Clear any global auth state here
  };
};

export const getStoredToken = (): string | null => {
  const token = getAuthToken();
  console.log(
    'Retrieved token from localStorage:',
    token ? `${token.substring(0, 20)}...` : 'null'
  );
  return token;
};

// Debug function to check token storage
export const debugTokenStorage = () => {
  const token = getAuthToken();
  console.log('=== TOKEN DEBUG ===');
  console.log('Token exists:', !!token);
  console.log('Token length:', token?.length || 0);
  console.log('Token preview:', token ? `${token.substring(0, 50)}...` : 'null');
  console.log('Is authenticated:', isAuthenticated());
  console.log('===================');
};
