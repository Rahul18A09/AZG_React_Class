import React from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
  return (
    <div>
      <h1>Products Page</h1>
      <nav>
        <Link to="phone">Phone</Link> |<Link to="laptop">Laptop</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default Products;
