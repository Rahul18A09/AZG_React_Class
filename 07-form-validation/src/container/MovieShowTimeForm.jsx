import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const MovieShowTimeForm = () => {
  const [fields, setFields] = useState([""]);
  const [movieName, setMovieName] = useState("");
  const [cinemaName, setCinemaName] = useState("");

  function addFields(e) {
    e.preventDefault();
    setFields([...fields, ""]);
  }

  function inputChange(index, value) {
    const values = [...fields];
    values[index] = value;
    setFields(values);
  }

  function output(e) {
    e.preventDefault();
    const OutPut = {
      CinemaName: cinemaName,
      MovieName: movieName,
      ShowTime: fields,
    };
    console.log(OutPut);
  }

  function removeFields(index) {
    const newArray = [...fields];
    newArray.splice(index, 1);
    setFields(newArray);
  }

  return (
    <div className="bg-secondary">
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="card shadow p-4">
          <h2>Cinema Form</h2>

          <form>
            <div className="mb-3">
              <label className="form-label">Movie Name</label>
              <input
                type="text"
                className="form-control"
                // placeholder="Movie Name"
                onChange={(e) => setMovieName(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Cinema Name</label>
              <input
                type="text"
                className="form-control"
                // placeholder="Cinema Name"
                onChange={(e) => setCinemaName(e.target.value)}
              />
            </div>

            {fields.map((field, index) => (
              <div className="mb-3" key={index}>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Show Time"
                    value={field}
                    onChange={(e) =>
                    inputChange(index, e.target.value)
                    }
                  />

                  <button
                    className="btn btn-outline-danger"
                    onClick={() => removeFields(index)}
                    disabled={fields.length === 1}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}

            <button
              className="btn btn-outline-secondary mb-3 w-100"
              onClick={addFields}
            >
              Add Show Time
            </button>

            <button
              type="submit"
              className="btn btn-outline-primary w-100"
              onClick={output}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MovieShowTimeForm;
