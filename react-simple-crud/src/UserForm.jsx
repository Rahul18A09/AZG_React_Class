import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  CardBody,
  CardTitle,
  Card,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Button,
  Col,
  Row,
} from "reactstrap";

const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      //   password: "",
    },

    validationSchema: Yup.object({
      name: Yup.string().required("Name is required!"),
      email: Yup.string().email().required("Email is required!"),
      //   password: Yup.string().required("Password is required!"),
    }),

    onSubmit: (values, { resetForm }) => {
      localStorage.setItem("usersData", JSON.stringify(values));
      alert("User data saved in localstorage");
      resetForm();
    },
  });

  return (
    <Container className="mt-5">
      <Row>
        <Col sm-4>
          <Card className="shadow">
            <CardBody>
              <CardTitle tag="h4" className="mb-4">
                User Registration
              </CardTitle>
              <Form onSubmit={formik.handleSubmit}>
                <FormGroup>
                  <Label for="name">Name:</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Enter Your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.name}
                    invalid={formik.touched.name && Boolean(formik.errors.name)}
                  />
                  <FormFeedback>{formik.errors.name}</FormFeedback>
                </FormGroup>

                <FormGroup>
                  <Label for="name">Email:</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter Your Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    values={formik.values.email}
                    invalid={
                      formik.touched.email && Boolean(formik.errors.email)
                    }
                  />
                  <FormFeedback>{formik.errors.email}</FormFeedback>
                </FormGroup>

                {/* <FormGroup>
              <Label for="name">Password:</Label>
              <Input
                type="password"
                id="Password"
                name="Password"
                placeholder="Enter Your Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                values={formik.values.password}
                invalid={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
              <FormFeedback>{formik.errors.password}</FormFeedback>
            </FormGroup> */}

                <Button color="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
