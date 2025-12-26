import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";

function Crud() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users"));
    if (storedUsers) {
      setUsers(storedUsers);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

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
    onSubmit: (values, { resetForm }) => {
      if (editId === null) {
        setUsers([...users, { ...values, id: Date.now() }]);
      } else {
        const updatedUsers = users.map((user) =>
          user.id === editId ? { ...user, ...values } : user
        );

        setUsers(updatedUsers);
        setEditId(null);
      }
      resetForm();
    },
  });

  function deleteUser(id) {
    let newUsersData = users.filter((user) => user.id !== id);
    setUsers(newUsersData);
  }

  function editUser(user) {
    formik.setValues({
      name: user.name,
      email: user.email,
    });
    setEditId(user.id);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
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

        <button type="submit">{editId ? "Update" : "Save"}</button>
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
                    <button type="button" onClick={() => editUser(user)}>
                      Update
                    </button>
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
