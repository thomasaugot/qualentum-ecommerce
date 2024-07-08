import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem("user");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  const [isAdmin, setIsAdmin] = useState(() => {
    const savedUser = localStorage.getItem("user");
    const savedEmail = savedUser ? JSON.parse(savedUser).email : null;
    return savedEmail && savedEmail.endsWith("@admin.com");
  });

  const login = (username, email) => {
    const userData = { username, email };
    setUser(userData);
    setIsAdmin(email.endsWith("@admin.com"));
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    setIsAdmin(false);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
