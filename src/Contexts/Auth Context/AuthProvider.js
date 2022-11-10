import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";

// create api and export
const AuthContex = createContext();
export const useAuth = () => useContext(AuthContex);

// Get auth and call with passing app
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // User collected hook
  const [user, setUser] = useState([]);

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Google login
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  // User sign out
  const logOut = () => {
    return signOut(auth);
  };

  const authInfo = { googleLogin, user, logOut };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
