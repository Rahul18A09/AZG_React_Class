import React from "react";
import { Route, Routes } from "react-router-dom";
import UserRoutes from "./routes/UserRoutes";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App(props) {
  return (
    <>
      <Header />
      <UserRoutes />
      <Footer />
    </>
  );
}

export default App;
