import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .min(6, "Name must be at least 6 characters")
        .required("Name is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      // password: Yup.string()
      //   .min(6, "Password must be at least 6 characters")
      //   .required("Password is required"),
    }),

    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h2>Login Form</h2>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formik.values.fullname}
            onChange={formik.handleChange}
          />
          {formik.touched.fullname && formik.errors.fullname && (
            <p style={{ color: "red" }}>{formik.errors.fullname}</p>
          )}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.touched.email && formik.errors.email && (
            <p style={{ color: "red" }}>{formik.errors.email}</p>
          )}
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
