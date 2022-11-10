import React, { createContext, useContext } from "react";

const AuthContex = createContext();

export const useAuth = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const authInfo = {};
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
