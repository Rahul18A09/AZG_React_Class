import React from "react";
import { useRef } from "react";

const UncontrolledForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Name:", nameRef.current.value);
    console.log("Email:", emailRef.current.value);
  };

  return (
    <div className="container vh-100 d-flex justify-content-center align-items-center">
      <div
        className="card shadow p-4"
        style={{ width: "100%", maxWidth: "420px" }}
      >
        <form onSubmit={handleSubmit}>
          <h2>Uncontrolled Form Example</h2>

          <div>
            <label htmlFor="name" className="form-label">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              ref={nameRef}
              placeholder="Name"
              className="form-control"
            />
          </div>

          <div>
            <label htmlFor="email" className="form-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              ref={emailRef}
              placeholder="Email"
              className="form-control"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UncontrolledForm;
