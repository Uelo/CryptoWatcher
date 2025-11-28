import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext<any>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<string | null>(() =>
    localStorage.getItem("crypto_user")
  );

  const login = (username: string) => {
    localStorage.setItem("crypto_user", username);
    setUser(username);
  };

  const logout = () => {
    localStorage.removeItem("crypto_user");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
