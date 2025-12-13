import React from "react";

const Bye = () => {
  const users = [
    { firstName: "Rahul", lastName: "Bharada", age: 25 },
    { firstName: "Asha", lastName: "Chudasama", age: 24 },
    { firstName: "Sejal", lastName: "Solanki", age: 30 },
  ];

  function fullName(user) {
    return user.firstName + " " + user.lastName;
  }
  return (
    <div>
      <h2>Person Details</h2>
      <ul>
        {users.map((user, index) => (
          <li>{fullName(user)} is {user.age} years old.</li>
        ))}
      </ul>
      {/* <p>Full Name:{fullName()}</p> */}

      {/* <p>First Name: {user.firstName}</p>
      <p>Last Name:{user.lastName}</p> */}
      {/* <p>Age:{user.age}</p> */}
    </div>
  );
};

export default Bye;
