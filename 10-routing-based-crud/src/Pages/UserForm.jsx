import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import { getUsers, saveUsers } from "../utils/storage";

function UserForm() {
  const navigate = useNavigate();
  const { id } = useParams(); // edit id

  const users = getUsers();
  const editUser = users.find((u) => u.id === Number(id));

  const formik = useFormik({
    initialValues: {
      name: editUser?.name || "",
      email: editUser?.email || "",
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email().required("Email is required"),
    }),
    onSubmit: (values) => {
      if (id) {
        const updated = users.map((u) =>
          u.id === Number(id) ? { ...u, ...values } : u
        );
        saveUsers(updated);
      } else {
        saveUsers([...users, { ...values, id: Date.now() }]);
      }
      navigate("/");
    },
  });

  return (
    <div>
      <h2>{id ? "Edit User" : "Add User"}</h2>

      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Name</label>
          <input
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          <span>{formik.errors.name}</span>
        </div>

        <div>
          <label>Email</label>
          <input
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          <span>{formik.errors.email}</span>
        </div>

        <button type="submit">
          {id ? "Update" : "Save"}
        </button>

        <button type="button" onClick={() => navigate("/")}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default UserForm;
