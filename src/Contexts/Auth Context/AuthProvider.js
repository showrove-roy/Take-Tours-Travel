import React, { createContext, useContext } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../Firebase/firebase.config";

// create api and export
const AuthContex = createContext();
export const useAuth = () => useContext(AuthContex);

// Get auth and call with passing app
const auth = getAuth(app);

// Google provider
const googleProvider = new GoogleAuthProvider();

// Google login
const googleLogin = () => {
  return signInWithPopup(auth, googleProvider);
};
const AuthProvider = ({ children }) => {
  const authInfo = { googleLogin };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
