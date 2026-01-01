import { Formik, useFormik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import {
  Button,
  Card,
  CardBody,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
} from "reactstrap";

function UsersForm(props) {
  const [users, setUsers] = useState([]);
  const [idToUpdateUser, setIdToUpdateUser] = useState(null);
  const navigate = useNavigate();
  const params = useParams();
  const loadDataFirstTime = useRef(true);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("_users")) || [];
    setUsers(saved);
  }, []);

  useEffect(() => {
    if (loadDataFirstTime.current) {
      loadDataFirstTime.current = false;
      return;
    }

    localStorage.setItem("_users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (params.uid) {
      const idNum = Number(params.uid);
      const found = users.find((u) => u.id === idNum);
      if (found) {
        setIdToUpdateUser(idNum);
        formik.setValues({ name: found.name || "", email: found.email || "" });
      } else {
        setIdToUpdateUser(null);
        formik.resetForm();
      }
    } else {
      setIdToUpdateUser(null);
      formik.resetForm();
    }
  }, [params.uid, users]);

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email().required(),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },
    validationSchema,
    onSubmit: (user, { resetForm }) => {
      if (idToUpdateUser) {
        let newUser = { ...user, id: idToUpdateUser };

        let updatedArray = users.map((userEle) =>
          userEle.id === idToUpdateUser ? newUser : userEle
        );
        setUsers(updatedArray);
        setIdToUpdateUser(null);
      } else {
        user.id = Date.now();
        setUsers([...users, user]);
      }
      navigate("/");
      resetForm();      
    },
  });

  return (
    <Container fluid className="my-5">
      <Card className="mx-auto" style={{ maxWidth: 600 }}>
        <CardBody>
          <h3 className="mb-3">{idToUpdateUser ? "Edit USer" : "Add User"}</h3>
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label for="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <small className="text-danger">{formik.errors.name}</small>
              )}
            </FormGroup>

            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Enter your email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <small className="text-danger">{formik.errors.email}</small>
              )}
            </FormGroup>

            <div>
              <Button color="primary" type="submit">
                {idToUpdateUser ? "Update" : "Save"}
              </Button>
              <Button
                color="secondary"
                className="ms-2"
                type="button"
                onClick={() => {
                  navigate("/");
                  formik.resetForm();
                  setIdToUpdateUser(null);
                }}
              >
                Cancel
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Container>
  );
}

export default UsersForm;
