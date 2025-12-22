import React from "react";
import { Navigate } from "react-router-dom";

const WithAuth = (WrappedComponent) => {
  return function ProtectedComponent(props) {
    const isAuthenticated = localStorage.getItem("auth");

    if (!isAuthenticated) {
      return <Navigate to="/login" />;
    }

    return <div>
        <WrappedComponent {...props}/>
    </div>;
  };
};

export default WithAuth;
