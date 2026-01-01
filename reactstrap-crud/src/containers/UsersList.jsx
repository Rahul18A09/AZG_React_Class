import React, { useEffect, useState, useRef } from "react";
import { Button, CardBody,Card, CardTitle, Container, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

function UsersList(props) {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();
  const loadDataFirstTime = useRef(true);

  useEffect(() => {
    let usersData = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(usersData);
  }, []);

  useEffect(() => {
    if (loadDataFirstTime.current) {
      loadDataFirstTime.current = false;
      return;
    }

    localStorage.setItem("_users", JSON.stringify(users));
  }, [users]);

  function deleteUser(id) {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    let newUsersData = users.filter((user) => user.id !== id);
    setUsers(newUsersData);
  }

  function updateUser(id) {
    navigate(`/users/edit/${id}`);
  }

  return (
    <Container className="my-5">
      <Card>
        <CardBody>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <CardTitle tag="h3" className="mb-0">
              Users
            </CardTitle>
            <Button color="primary" onClick={() => navigate("/users/add")}>
              Add User
            </Button>
          </div>

          <div className="table-responsive">
            <Table hover responsive size="sm" className="mb-0">
              <thead>
                <tr>
                  <th style={{ width: "130px" }}>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th style={{ width: "140px" }}>Action</th>
                </tr>
              </thead>

              <tbody>
                {users && Array.isArray(users) && users.length > 0 ? (
                  users.map((user) => (
                    <tr key={user.id}>
                      <td className="align-middle">{user.id}</td>
                      <td className="align-middle">{user.name}</td>
                      <td className="align-middle">{user.email}</td>
                      <td className="align-middle">
                        <Button
                          size="sm"
                          color="warning"
                          className="me-2"
                          onClick={() => updateUser(user.id)}
                        >
                          Edit
                        </Button>
                        <Button
                          size="sm"
                          color="danger"
                          onClick={() => deleteUser(user.id)}
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="text-center text-muted py-4">
                      <div>
                        No uesrs yet.
                        <Button
                          color="link"
                          size="sm"
                          onClick={() => navigate("/users/add")}
                        >
                          Add a user
                        </Button>
                      </div>
                    </td>
                  </tr>
                )}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Container>
  );
}

export default UsersList;
