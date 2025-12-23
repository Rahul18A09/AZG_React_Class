import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      {users.map((u) => (
        <li key={u.id}>{u.id}-{u.name}-{u.username}-{u.email}</li>
      ))}
    </div>
  );
}

export default Users;
