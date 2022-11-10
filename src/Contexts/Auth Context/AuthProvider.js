import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
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

  // Loading system
  const [loading, setLoading] = useState(true);

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Google login
  const googleLogin = () => {
    setLoading(false);
    return signInWithPopup(auth, googleProvider);
  };

  // Create user using email & password
  const createUser = (email, password) => {
    setLoading(false);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Login user using email & password
  const loginUser = (email, password) => {
    setLoading(false);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Get the currently signed-in user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //Update a user's profile
  const updateUserProfile = (name, photo) => {
    setLoading(false);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // User sign out
  const logOut = () => {
    setLoading(false);
    return signOut(auth);
  };

  const authInfo = {
    googleLogin,
    user,
    logOut,
    createUser,
    loginUser,
    updateUserProfile,
    loading,
  };
  return <AuthContex.Provider value={authInfo}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
