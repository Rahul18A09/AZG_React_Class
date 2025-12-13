import { useState } from "react";

const Student = () => {

  const [Student, SetStudent] = useState({
    name: "Rahul",
    grade: "A",
    city: "Navsari",
  });

  const changeCity = () => {
    // SetStudent({...Student, city:"Mumbai"})
    SetStudent({name:"Asha", grade:"A+", city:"Gir-Somnath"})
  }

  return (
    <div>
      <h2>Name: {Student.name}</h2>
      <p>Grade: {Student.grade} </p>
      <p>city: {Student.city} </p>
      <button onClick={changeCity}>Change City</button>
    </div>
  );
};

export default Student;
