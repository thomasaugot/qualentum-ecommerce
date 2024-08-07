import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/slices/userSlice";

const ProtectedRoute = ({ children }) => {
  const user = useSelector(selectUser);

  if (!user) {
    return <Navigate to="/authentication" />;
  }

  return children;
};

export default ProtectedRoute;
