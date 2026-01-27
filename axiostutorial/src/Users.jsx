import React, { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>User Data</h1>
      {users.map((user) => (
        <div>
          <h2 key={user.id}>{user.name}</h2>
          <p>{user.username}</p>
          <p>{user.email}</p>

        </div>
      ))}
    </div>
  );
}


export default Users;
