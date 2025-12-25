import { useFormik } from "formik";
import React, { useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
    },
  });

  const validationSchema = Yup.object({
    fullname: Yup.string().required(),
    email: Yup.string().email("required").required("Email is requird!"),
  });



  onSubmit = (value) => {
    console.log(value);
  };

  return (
    <div>
      <h2>Crud</h2>
      <form>
        <div>
          <label htmlFor="fullname">Full Name:</label>
          <input
            type="text"
            id="fullname"
            name="fullname"
            value={formik.fullname}
            onChange={handleSubmit}
          />
          <span>{formik.errors.fullname}</span>
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formik.email}
            onChange={handleSubmit}
          />
          <span>{formik.errors.email}</span>
        </div>
      </form>
    </div>
  );
}

export default Users;
