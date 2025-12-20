import React from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import * as Yup from "yup";

const CinemaFormValidation = () => {
  const initialValues = {
    moviename: "",
    cinemaname: "",
    showtime: [""],
  };

  const validationSchema = Yup.object({
    moviename: Yup.string().required("Movie name is required"),
    cinemaname: Yup.string().required("Cinema name is required"),
    showtime: Yup.array()
      .of(Yup.string().required("Show time is required"))
      .min(1, "At least one show time is required"),
  });

  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <Form>
          <div className="container d-flex vh-100 justify-content-center align-items-center">
            <div className="card shadow p-3">
              <h2 className="fs-3 text-center text-muted m-2 fw-bold text-md-center">Movie Show Time</h2>
              <div className="mb-3">
                <label htmlFor="moviename" className="form-label">
                  Movie Name:
                </label>
                <Field name="moviename" className="form-control" />
                <div className="text-danger">
                  <ErrorMessage name="moviename" />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="cinemaname" className="form-label">
                  Cinema Name
                </label>
                <Field name="cinemaname" className="form-control" />
                <div className="text-danger">
                  <ErrorMessage name="cinemaname" />
                </div>
              </div>

              <FieldArray name="showtime">
                {({ push, remove }) => (
                  <>
                    {values.showtime.map((_, index) => (
                      <div className="mb-3" key={index}>
                        <div className="input-group">
                          <Field
                            name={`showtime.${index}`}
                            className="form-control"
                            placeholder="ShowTime"
                          />

                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => remove(index)}
                            disabled={values.showtime.length === 1}
                          >
                            Delete
                          </button>
                        </div>

                        <div className="text-danger">
                          <ErrorMessage name={`showtime.${index}`} />
                        </div>
                      </div>
                    ))}

                    <button
                      type="button"
                      className="btn btn-outline-secondary mb-3 w-100"
                      onClick={() => push("")}
                    >
                      Add Show Time
                    </button>
                  </>
                )}
              </FieldArray>
              <button type="submit" className="btn btn-outline-primary w-100">
                Submit
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CinemaFormValidation;
