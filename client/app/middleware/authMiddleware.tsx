// src/middleware/authMiddleware.tsx
import { Redirect } from 'expo-router';
import { useAuth } from '../context/AuthContext';

const AuthMiddleware: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Redirect href="pages/get-started" />;
  }

  return <>{children}</>;
};

export default AuthMiddleware;
