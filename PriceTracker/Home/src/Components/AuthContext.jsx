import { createContext, useState, useContext } from "react";

// Create Context
export const AuthContext = createContext();

// AuthProvider to wrap the entire app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Default is no user (null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => useContext(AuthContext);
