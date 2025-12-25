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
    onSubmit: (user, {resetForm}) => {  
      user.id = Date.now();
      setUsers([...users, user]);
      resetForm();
    },
  });

  function deleteUser (id){
    let  newUsersData = users.filter((user) => user.id !== id)
    setUsers(newUsersData);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
        ,  <input
            type="text"
            id="name"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span className="text-danger">{formik.errors.name}</span>
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
          <span className="text-danger">{formik.errors.email}</span>
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
            {users && Array.isArray(users) && users.length > 0 ? (
              users.map((user, index) => (
                <tr key={index}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>
                    <button type="button">Update</button>
                    <button type="button" onClick={() => deleteUser(user.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td>
                  <p>Data not Found</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Crud;
