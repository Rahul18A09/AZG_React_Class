import { useFormik } from "formik";
import React, { useState } from "react";
import * as Yup from "yup";

function Users() {
  const [users, setUsers] = useState([]);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email().required("Email is required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    validationSchema,
    onSubmit: (user, { resetForm }) => {
      user.id = Date.now();
      setUsers([...users, user]);
      resetForm();
    },
  });

  function deleteUser(id) {
    let newUsersData = users.filter((user) => user.id !== id);
    setUsers(newUsersData);
  }

  return (
    <div className="container-fluid">
      <div className="row my-5 justify-content-center">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center text-success">CRUD</h2>
              <form onSubmit={formik.handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    required
                  />
                  <span className="text-danger">{formik.errors.name}</span>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    required
                  />
                  <span className="text-danger">{formik.errors.email}</span>
                </div>

                <button type="submit" className="btn btn-primary p-3 w-100">
                  Save
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-4">
          <div className="col-8">
            <table className="table table-dark table-striped">
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
                        <button
                          type="button"
                          className="btn btn-sm btn-warning me-2"
                        >
                          Update
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-danger">
                      <p className="my-3">Data Not Found</p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Users;
