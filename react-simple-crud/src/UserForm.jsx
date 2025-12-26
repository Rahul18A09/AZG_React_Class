import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Card, CardBody, Container, Form ,CardTitle} from "reactstrap";

const UserForm = () => {
  const formik = useFormik({
     initialValues: {
      name: "",
      email: "",
      password: "",
    },
  })

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required!"),
      email: Yup.string().email().required("Email is required!"),
      password: Yup.string().min(6, "Password must be at least 6 characters!"),
    }),

    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("userData", JSON.stringify(values));
      alert("USer Data Saved in localStorage Successfully!");
      resetForm();
    },
  };

  return (
    <Container>
        <Card>
            <CardBody>
                <CardTitle tag="h4">
User Registration
                </CardTitle>

                <Form>

                </Form>
            </CardBody>
        </Card>
    </Container>
  );
};

export default UserForm;
