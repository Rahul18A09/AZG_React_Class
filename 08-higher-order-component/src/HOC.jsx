import React from 'react'

const  withAuth = (component) => {
  return  function AuthenticatedComponent(props) {
    if (!isAuthenticated()) {
        return <Navigate to="/login"/>;
}

return <component {...props} />;
  }
}

export default  withAuth
