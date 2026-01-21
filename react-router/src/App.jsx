import React from "react";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import User from "./User";
import NotFound from "./NotFound";
import Products from "./Products";
import Phone from "./Phone";
import Laptop from "./Laptop";

function App() {
  return (
    <BrowserRouter>
      <h1>React Router Example</h1>

      <nav>
        {/* <Link to="/">Home</Link>|
        <Link to="/about">About</Link>|
        <Link to="contact">Contact</Link> */}
        <NavLink
          to="/"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Home
        </NavLink>{" "}
        |
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          About
        </NavLink>{" "}
        |
        <NavLink
          to="/contact"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Contact
        </NavLink>{" "}
        |
        <NavLink
          to="/user/10"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          User
        </NavLink>{" "}
        |
        <NavLink
          to="/products"
          style={({ isActive }) => ({ color: isActive ? "blue" : "black" })}
        >
          Products
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="/products" element={<Products />}>
          <Route path="phone" element={<Phone />} />
          <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
