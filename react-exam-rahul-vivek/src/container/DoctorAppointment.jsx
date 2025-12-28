import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import {
  Button,
  CardBody,
  CardTitle,
  Container,
  FormGroup,
  Card,
  Form,
  Input,
  Label,
  Table,
} from "reactstrap";

function DoctorAppointment() {
  const [users, setUser] = useState([]);
  const [editId, setEditIt] = useState(null);

  const validationSchema = Yup.object({
    pname: Yup.string().required(),
    email: Yup.string().required().email(),
    mono: Yup.string().required().min(10),
    dname: Yup.string().required(),
    deptname: Yup.string().required(),
    date: Yup.date().required(),
    time: Yup.string().required(),
  });

  useEffect(() => {
    const storedUSer = JSON.parse(localStorage.getItem("_users"));
    if (storedUSer) {
      setUser(storedUSer);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("_users", JSON.stringify(users));
  }, [users]);

  const formik = useFormik({
    initialValues: {
      pname: "",
      email: "",
      mono: "",
      dname: "",
      deptname: "",
      date: "",
      time: "",
    },
    validationSchema,
    onSubmit: (value) => {
      if (editId === null) {
        setUser([...users, { ...value, id: Date.now(), status: "Pending" }]);
      } else {
        const updatedUsers = users.map((user) =>
          user.id === editId ? { ...user, ...value } : user
        );

        setUser(updatedUsers);
        setEditIt(null);
      }
      formik.resetForm();
    },
  });

  function editUserId(user) {
    setEditIt(user.id);
    formik.setValues({
      pname: user.pname,
      email: user.email,
      mono: user.mono,
      dname: user.dname,
      deptname: user.deptname,
      date: user.date,
      time: user.time,
    });
  }

  function deleteUSer(id) {
    setUser(users.filter((user) => user.id !== id));
  }

  function confirm(id) {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: "Confirmed" } : user
    );
    setUser(updatedUsers);
  }

  function complatee(id) {
    const updatedUsers = users.map((user) =>
      user.id === id ? { ...user, status: "Completed" } : user
    );
    setUser(updatedUsers);
  }

  return (
    <Container fluid>
      <Card className="w-50 m-auto">
        <CardBody className="m-4">
          <CardTitle tag="h4">Appointment form</CardTitle>

          <Form onSubmit={formik.handleSubmit}>
            <FormGroup>
              <Label for="pname">Patient Name:</Label>
              <Input
                type="text"
                id="pname"
                name="pname"
                placeholder="patient name"
                value={formik.values.pname}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.pname}</span>
            </FormGroup>

            <FormGroup>
              <Label for="email">Email:</Label>
              <Input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.email}</span>
            </FormGroup>

            <FormGroup>
              <Label for="mono">Mobile Number:</Label>
              <Input
                type="number"
                id="mono"
                name="mono"
                placeholder="Mobile Number"
                value={formik.values.mono}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.mono}</span>
            </FormGroup>

            <FormGroup>
              <Label for="dname">Doctor Name:</Label>
              <Input
                type="text"
                id="dname"
                name="dname"
                placeholder="Doctor Name"
                value={formik.values.dname}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.dname}</span>
            </FormGroup>

            <FormGroup>
              <Label for="deptname">Department</Label>
              <Input
                id="deptname"
                type="select"
                name="deptname"
                value={formik.values.deptname}
                onChange={formik.handleChange}
              >
                <option value="opd">OPD</option>
                <option value="icu">ICU</option>
                <option value="general">GENERAL</option>
              </Input>
              <span className="text-danger">{formik.errors.deptname}</span>
            </FormGroup>

            <FormGroup>
              <Label for="date">Date & Time</Label>
              <Input
                type="date"
                id="date"
                name="date"
                placeholder="Date"
                value={formik.values.date}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.date}</span>
            </FormGroup>

            <FormGroup>
              <Label for="time">Time</Label>
              <Input
                type="time"
                id="time"
                name="time"
                placeholder="time"
                value={formik.values.time}
                onChange={formik.handleChange}
              />
              <span className="text-danger">{formik.errors.time}</span>
            </FormGroup>

            <Button type="submit" color="primary" className="w-100 ">
              Submit
            </Button>
          </Form>
        </CardBody>
      </Card>

      <Table striped className="my-4">
        <thead>
          <tr>
            <td>PNAME</td>
            <td>EMAIL</td>
            <td>MOBILE</td>
            <td>DOCTOR</td>
            <td>DEPARTMENT</td>
            <td>APPOINTMENT</td>
            <td>STATUS</td>
            <td>ACTION</td>
          </tr>
        </thead>

        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.pname}</td>
              <td>{user.email}</td>
              <td>{user.mono}</td>
              <td>{user.dname}</td>
              <td>{user.deptname}</td>
              <td>
                {user.date}-{user.time}
              </td>
              <td>{user.status}</td>
              <td>
                <Button className="me-2" color="info" onClick={() => editUserId(user)}>Edit</Button>
                <Button className="me-2" color="danger" onClick={() => deleteUSer(user.id)}>Delete</Button>
                <Button className="me-2" color="success" onClick={() => confirm(user.id)}>Confirm</Button>
                <Button className="me-2" color="warning" onClick={() => complatee(user.id)}>Complete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default DoctorAppointment;
