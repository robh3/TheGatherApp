import React, { createContext, useState, useContext } from 'react';

// Create a simple default context
const AuthContext = createContext({
  currentUser: null,
  login: () => {},
  logout: () => {},
  signup: () => {}
});

// Simple AuthProvider component
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  // Minimal auth methods
  const login = () => {};
  const logout = () => {};
  const signup = () => {};

  // Provide a minimal value
  const value = {
    currentUser,
    login,
    logout,
    signup
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// Simple useAuth hook
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}