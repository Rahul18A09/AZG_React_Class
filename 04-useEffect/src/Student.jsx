import React, { useState } from "react";

const Student = () => {
  const [student, setStudent] = useState({
    name: "Rahul",
    grade: "A",
    city: "Junagadh",
  });

  const changeCity = () => {
    setStudent({...student, city: "Navsari"})
  }

  return <div>
    <h2>Name: {student.name}</h2>
    <p>Grade: {student.grade}</p>
    <p>City: {student.city}</p>
    <button onClick={changeCity}>Change City</button>
  </div>;
};

export default Student;
