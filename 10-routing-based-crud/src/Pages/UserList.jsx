import React, { useEffect } from "react";
import { getUsers, saveUsers } from "../utils/storage";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setUsers(getUsers());
  }, []);

  function deleteUser(id) {
    const updated = users.filter((user) => users.id !== id);
    setUsers(updated);
    saveUsers(updated);
  }

  return (
    <div>
      <h2>UserList</h2>
      <button onClick={() => navigate("/add")}>Add User</button>

      <table border="1">
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {users && Array.isArray(users) && users.length > 0 ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button onClick={() => navigate(`/edit/${user.id}`)}>
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No Data Found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UserList;
