export const useAuth = () => {
  // Implement auth logic
  const user = localStorage.getItem('user');
  return { user, isAuthenticated: !!user };
};