import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

function Crud() {
  const [users, setUsers] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is eequired!"),
    email: Yup.string().email().required("Email is required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema,
    onSubmit: (user) => {
      setUsers([...users, user]);
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" value={formik.values.name} onChange={formik.handleChange} />
        </div>

        <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" value={formik.values.email} onChange={formik.handleChange} />
        </div>

        <button type="submit">Save</button>
      </form>

      <div>
        <table>
            <thead>
                <tr>
                    <td>#</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Action</td>
                </tr>
            </thead>

            <tbody>
                {users &&  Array.isArray(users)
                }
            </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
