import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth1 = (Component) => {
  return function ProtectedComponent(props) {
    const token = localStorage.getItem("token");

    if (!token) {
      return <Navigate to="/login" replace />;
    }

    return <Component {...props} />;
  };
};

export default WithAuth1;
