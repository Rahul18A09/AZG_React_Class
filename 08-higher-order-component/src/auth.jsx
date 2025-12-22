import React from 'react'

const isAuthenticated = () => {

     return localStorage.getItem('islogin') === 'true';
  
};

export default isAuthenticated
