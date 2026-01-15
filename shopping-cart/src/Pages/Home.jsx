import React from "react";

function Home() {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Shop Products</h1>
      <div className="row">
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Laptop</h5>
              <p className="card-text">$800</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Phone</h5>
              <p className="card-text">$500</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Headphones</h5>
              <p className="card-text">$100</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
        <div className="col-md-3 mb-4">
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Keyboard</h5>
              <p className="card-text">$70</p>
              <button className="btn btn-primary">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
