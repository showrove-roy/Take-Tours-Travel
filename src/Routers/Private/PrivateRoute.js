import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/Auth Context/AuthProvider";

const PrivateRoute = ({ children }) => {
  let location = useLocation();
  const { user } = useAuth();
  if (user?.uid) {
    return <div>{children}</div>;
  }
  return <Navigate to='/login' state={{ from: location }} replace />;
};

export default PrivateRoute;
