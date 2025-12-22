import React from "react";

const WithAuth = (DashBoard) => {
  return function AuthenticatedComponent(props) {
    const isLoggedIn = false;

    if (!isLoggedIn) {
      return <h2>Please login to access this page</h2>;
    }

    return <DashBoard {...props} />;
  };
};

export default WithAuth;
