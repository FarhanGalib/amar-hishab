import React, { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [token, setToken] = useState();
  useEffect(() => {
    setTimeout(() => {
      setToken('xyzasdga3235rfds231f3swasf');
    }, 2000);
  }, []);
  if (!token) return <div>Loading</div>;
  return <AuthContext.Provider value={token}>{children}</AuthContext.Provider>;
};

export function useAuthContext() {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error('Auth Provider is not found');
  }
  return context;
}

export default AuthProvider;
